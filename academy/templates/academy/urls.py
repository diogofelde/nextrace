from flask import Blueprint, render_template
from app.models import Modulo, Atividade

main_bp = Blueprint('main_bp', __name__)

@main_bp.route('/dashboard')
def dashboard():
    # Exemplo: carregar usuário e módulos
    user = ...  # obtido via sessão ou login
    modulos = Modulo.query.all()
    return render_template('dashboard.html', user=user, modulos=modulos)

@main_bp.route('/modulo/<int:modulo_id>')
def modulo_detail(modulo_id):
    modulo = Modulo.query.get_or_404(modulo_id)
    return render_template('modulo_detail.html', modulo=modulo)

@main_bp.route('/atividade/<int:atividade_id>')
def atividade_detail(atividade_id):
    atividade = Atividade.query.get_or_404(atividade_id)
    progresso = ...  # lógica para obter progresso do usuário
    return render_template('atividade.html', atividade=atividade, progresso=progresso)