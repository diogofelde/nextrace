from flask_restful import Resource
from app.models import Modulo, Atividade, Progresso, Conquista
from app.schemas import ModuloSchema, AtividadeSchema, ProgressoSchema, ConquistaSchema
from app import db

modulo_schema = ModuloSchema()
atividade_schema = AtividadeSchema()
progresso_schema = ProgressoSchema()
conquista_schema = ConquistaSchema()

class ModuloAPI(Resource):
    def get(self):
        modulos = Modulo.query.all()
        return modulo_schema.dump(modulos, many=True), 200

class AtividadeAPI(Resource):
    def get(self):
        atividades = Atividade.query.all()
        return atividade_schema.dump(atividades, many=True), 200

class ProgressoAPI(Resource):
    def get(self):
        progresso = Progresso.query.all()
        return progresso_schema.dump(progresso, many=True), 200

class ConquistaAPI(Resource):
    def get(self):
        conquistas = Conquista.query.all()
        return conquista_schema.dump(conquistas, many=True), 200