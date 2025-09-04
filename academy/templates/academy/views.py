from flask import Blueprint, render_template, request, redirect, url_for
from flask_login import login_required, current_user
from app import db
from app.models import Modulo, Atividade, Progresso

main_bp = Blueprint('main_bp', __name__)

@main_bp.route('/dashboard')
@login_required
def dashboard():
    modulos = Modulo.query.all()
    return render_template('dashboard.html', user=current_user, modulos=modulos)

@main_bp.route('/modulo/<int:modulo_id>')
@login_required
def modulo_detail(modulo_id):
    modulo = Modulo.query.get_or_404(modulo_id)
    return render_template('modulo_detail.html', modulo=modulo)

@main_bp.route('/atividade/<int:atividade_id>', methods=['GET', 'POST'])
@login_required
def atividade_detail(atividade_id):
    atividade = Atividade.query.get_or_404(atividade_id)

    progresso = Progresso.query.filter_by(usuario_id=current_user.id, atividade_id=atividade.id).first()
    if not progresso:
        progresso = Progresso(usuario_id=current_user.id, atividade_id=atividade.id, concluido=False)
        db.session.add(progresso)
        db.session.commit()

    if request.method == 'POST':
        progresso.concluido = True
        db.session.commit()
        return redirect(url_for('main_bp.atividade_detail', atividade_id=atividade.id))

    return render_template('atividade.html', atividade=atividade, progresso=progresso)