from flask import Blueprint, render_template
from flask_login import login_required, current_user
from app.models import PerfilUsuario, ConquistaUsuario

main_bp = Blueprint('main_bp', __name__)

@main_bp.route('/perfil')
@login_required
def perfil_aluno():
    perfil = PerfilUsuario.query.filter_by(usuario_id=current_user.id).first()
    conquistas = ConquistaUsuario.query.filter_by(usuario_id=current_user.id).join('conquista').all()

    return render_template('mascote/perfil.html', {
        'perfil': perfil,
        'conquistas': conquistas,
        'nivel': perfil.nivel_atual() if perfil else None
    })