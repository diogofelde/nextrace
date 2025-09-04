from flask import Blueprint, render_template
from app.models import Usuario  # Certifique-se de importar o modelo corretamente

usuario_bp = Blueprint('usuario', __name__, template_folder='templates/usuario')

@usuario_bp.route('/usuarios')
def listar_usuarios():
    usuarios = Usuario.query.all()
    return render_template('usuarios.html', usuarios=usuarios)