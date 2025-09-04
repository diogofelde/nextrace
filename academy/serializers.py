from app import ma
from app.models import Modulo, Atividade, Progresso, Conquista, Usuario

class ModuloSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Modulo
        load_instance = True

class AtividadeSchema(ma.SQLAlchemyAutoSchema):
    modulo = ma.Nested(ModuloSchema, dump_only=True)

    class Meta:
        model = Atividade
        load_instance = True

class ProgressoSchema(ma.SQLAlchemyAutoSchema):
    atividade = ma.Nested(AtividadeSchema, dump_only=True)
    usuario = ma.Function(lambda obj: obj.usuario.username)

    class Meta:
        model = Progresso
        load_instance = True

class ConquistaSchema(ma.SQLAlchemyAutoSchema):
    usuario = ma.Function(lambda obj: obj.usuario.username)

    class Meta:
        model = Conquista
        load_instance = True