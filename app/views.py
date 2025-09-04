from flask import request, jsonify, current_app
from flask import Blueprint
import os

rota_bp = Blueprint('rota_bp', __name__)

@rota_bp.route('/rota_protegida', methods=['GET'])
def rota_protegida():
    chave_recebida = request.headers.get('X-CHAVE-ACESSO')
    chave_mestra = os.getenv('CHAVE_MESTRA')

    if chave_recebida == chave_mestra:
        return jsonify({'mensagem': 'Acesso autorizado com chave mestra!'}), 200

    return jsonify({'erro': 'Acesso negado'}), 403