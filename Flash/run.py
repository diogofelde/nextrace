# run.py
from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
CHAVE_MESTRA = os.getenv('CHAVE_MESTRA')

@app.route('/rota_protegida', methods=['GET'])
def rota_protegida():
 chave_recebida = request.headers.get('X-CHAVE-ACESSO')
 if chave_recebida == CHAVE_MESTRA:
 return jsonify({'mensagem': 'Acesso autorizado com chave mestra!'})
 return jsonify({'erro': 'Acesso negado'}), 403

if __name__ == '__main__':
 app.run(debug=True)