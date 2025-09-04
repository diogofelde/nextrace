from flask import Blueprint, render_template, request, redirect, url_for
from app.models import Licenca
from app import db

main_bp = Blueprint('main_bp', __name__)

@main_bp.route('/ativar', methods=['GET', 'POST'])
def ativar_sistema():
    if request.method == 'POST':
        serial = request.form.get('serial')
        licenca = Licenca.query.filter_by(serial_key=serial).first()

        if licenca and licenca.ativa:
            licenca.ativa = False
            licenca.usuario = 'Usuário Exemplo'  # ou current_user.username
            db.session.commit()
            return render_template('ativacao.html', serial=serial)
        else:
            mensagem = "Chave inválida ou já utilizada."
            return render_template('ativacao_erro.html', mensagem=mensagem)

    return render_template('form_ativacao.html')