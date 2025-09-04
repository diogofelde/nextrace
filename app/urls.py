from flask import Blueprint, render_template
from flask_login import login_required

# Usando Blueprint para modularidade (opcional, mas recomendado)
rota_bp = Blueprint('rota_bp', __name__)

@rota_bp.route('/rota_protegida')
@login_required  # Protege a rota com login
def rota_protegida():
    return render_template('rota_protegida.html')