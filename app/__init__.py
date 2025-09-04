from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_wtf.csrf import CSRFProtect
import flask_monitoringdashboard as dashboard
from dotenv import load_dotenv
import os

db = SQLAlchemy()
csrf = CSRFProtect()

def create_app():
    load_dotenv()
    app = Flask(__name__)
    app.secret_key = os.getenv('SECRET_KEY')
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    csrf.init_app(app)
    dashboard.bind(app)

    with app.app_context():
        import app.routes  # ✅ Corrigido: importa o módulo, não um nome

    return app