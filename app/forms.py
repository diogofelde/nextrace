from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email, Length

class LoginForm(FlaskForm):
    email = StringField('Email', validators=[
        DataRequired(message="O campo email é obrigatório."),
        Email(message="Digite um email válido.")
    ])
    senha = PasswordField('Senha', validators=[
        DataRequired(message="O campo senha é obrigatório."),
        Length(min=6, message="A senha deve ter pelo menos 6 caracteres.")
    ])
    submit = SubmitField('Entrar')

class RegisterForm(FlaskForm):
    nome = StringField('Nome', validators=[
        DataRequired(message="O campo nome é obrigatório."),
        Length(min=2, max=100, message="O nome deve ter entre 2 e 100 caracteres.")
    ])
    email = StringField('Email', validators=[
        DataRequired(message="O campo email é obrigatório."),
        Email(message="Digite um email válido.")
    ])
    senha = PasswordField('Senha', validators=[
        DataRequired(message="O campo senha é obrigatório."),
        Length(min=6, message="A senha deve ter pelo menos 6 caracteres.")
    ])
    submit = SubmitField('Registrar')