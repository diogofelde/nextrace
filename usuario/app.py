from flask import Flask, render_template, request, redirect, url_for, session
from werkzeug.security import generate_password_hash, check_password_hash
import mysql.connector

app = Flask(__name__)
app.secret_key = 'minha_chave_secreta_123'

# Conexo com o banco
def conectar():
 return mysql.connector.connect(
 host='localhost',
 user='root',
 password='sua_senha',
 database='NexTrace'
 )

@app.route('/')
def home():
 return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
 if request.method == 'POST':
 email = request.form['email']
 senha = request.form['senha']

 conexao = conectar()
 cursor = conexao.cursor()
 cursor.execute("SELECT senha FROM usuarios WHERE email = %s", (email,))
 resultado = cursor.fetchone()

 if resultado and check_password_hash(resultado[0], senha):
 session['usuario'] = email
 return redirect(url_for('dashboard'))
 else:
 return 'Login invlido'
 return render_template('login.html')

@app.route('/cadastro', methods=['GET', 'POST'])
def cadastro():
 if request.method == 'POST':
 nome = request.form['nome']
 email = request.form['email']
 senha = generate_password_hash(request.form['senha'])

 conexao = conectar()
 cursor = conexao.cursor()
 cursor.execute("INSERT INTO usuarios (nome, email, senha) VALUES (%s, %s, %s)", (nome, email, senha))
 conexao.commit()
 return redirect(url_for('login'))
 return render_template('cadastro.html')

@app.route('/dashboard')
def dashboard():
 if 'usuario' in session:
 return render_template('dashboard.html', usuario=session['usuario'])
 else:
 return redirect(url_for('login'))

@app.route('/logout')
def logout():
 session.pop('usuario', None)
 return redirect(url_for('login'))

if __name__ == '__main__':
 app.run(debug=True)