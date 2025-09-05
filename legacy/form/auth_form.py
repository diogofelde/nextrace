from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Length

class LoginForm(FlaskForm):
 username = StringField('Usurio', validators=[DataRequired(), Length(min=3, max=150)])
 password = PasswordField('Senha', validators=[DataRequired()])
 submit = SubmitField('Entrar')

class RegisterForm(FlaskForm):
 username = StringField('Usurio', validators=[DataRequired(), Length(min=3, max=150)])
 password = PasswordField('Senha', validators=[DataRequired()])
 submit = SubmitField('Registrar')