from flask import render_template, redirect, url_for, request, session, current_app, flash
from app import db
from app.models import Usuario
from app.forms import LoginForm, RegisterForm
from werkzeug.security import generate_password_hash, check_password_hash
from app import app

@app.route('/')
def index():
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        usuario = Usuario.query.filter_by(email=form.email.data).first()
        if usuario and check_password_hash(usuario.senha, form.senha.data):
            session['usuario_id'] = usuario.id
            flash('Login realizado com sucesso!', 'success')
            return redirect(url_for('dashboard'))
        else:
            flash('Credenciais inválidas. Tente novamente.', 'danger')
    return render_template('login.html', form=form)

@app.route('/registrar', methods=['GET', 'POST'])
def registrar():
    form = RegisterForm()
    if form.validate_on_submit():
        usuario_existente = Usuario.query.filter_by(email=form.email.data).first()
        if usuario_existente:
            flash('E-mail já registrado. Faça login ou use outro.', 'warning')
            return redirect(url_for('registrar'))

        senha_hash = generate_password_hash(form.senha.data)
        novo_usuario = Usuario(
            nome=form.nome.data,
            email=form.email.data,
            senha=senha_hash
        )
        db.session.add(novo_usuario)
        db.session.commit()
        flash('Cadastro realizado com sucesso!', 'success')
        return redirect(url_for('login'))
    return render_template('registrar.html', form=form)

@app.route('/dashboard')
def dashboard():
    if 'usuario_id' not in session:
        flash('Você precisa estar logado para acessar o dashboard.', 'warning')
        return redirect(url_for('login'))
    return render_template('dashboard.html')

@app.route('/chat-ia', methods=['POST'])
def chat_ia():
    pergunta = request.form.get('pergunta')
    resposta = f"Você perguntou: {pergunta}. Resposta simulada da IA."
    return resposta