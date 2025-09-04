from app import db
from flask_login import UserMixin
from datetime import datetime

class Modulo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    descricao = db.Column(db.Text, nullable=True)

    atividades = db.relationship('Atividade', backref='modulo', lazy=True)

    def __repr__(self):
        return f"<Modulo {self.nome}>"

class Atividade(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    modulo_id = db.Column(db.Integer, db.ForeignKey('modulo.id'), nullable=False)
    titulo = db.Column(db.String(100), nullable=False)
    tipo = db.Column(db.String(50), nullable=False)
    descricao = db.Column(db.Text, nullable=True)
    ordem = db.Column(db.Integer, nullable=True)

    def __repr__(self):
        return f"<Atividade {self.titulo} ({self.modulo.nome})>"

class Progresso(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), nullable=False)
    atividade_id = db.Column(db.Integer, db.ForeignKey('atividade.id'), nullable=False)
    concluido = db.Column(db.Boolean, default=False)
    data_conclusao = db.Column(db.DateTime, nullable=True)
    pontuacao = db.Column(db.Integer, nullable=True)

    usuario = db.relationship('Usuario', backref='progresso')
    atividade = db.relationship('Atividade', backref='progresso')

    def __repr__(self):
        return f"<Progresso {self.usuario.username} - {self.atividade.titulo}>"

class Conquista(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), nullable=False)
    nome = db.Column(db.String(100), nullable=False)
    descricao = db.Column(db.Text, nullable=True)
    data_conquista = db.Column(db.DateTime, default=datetime.utcnow)

    usuario = db.relationship('Usuario', backref='conquistas')

    def __repr__(self):
        return f"<Conquista {self.nome} - {self.usuario.username}>"

class Licenca(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    serial_key = db.Column(db.String(30), unique=True, nullable=False)
    ativa = db.Column(db.Boolean, default=True)
    usuario = db.Column(db.String(100), nullable=True)
    data_ativacao = db.Column(db.DateTime, nullable=True)

    def __repr__(self):
        return f"<Licenca {self.serial_key}>"