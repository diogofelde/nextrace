from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from app.models import Usuario, LogAtividade, NivelUsuario, PerfilUsuario

admin = Admin(name='Painel Admin', template_mode='bootstrap4')

def init_admin(app, db):
    admin.init_app(app)
    admin.add_view(ModelView(Usuario, db.session))
    admin.add_view(ModelView(LogAtividade, db.session))
    admin.add_view(ModelView(NivelUsuario, db.session))
    admin.add_view(ModelView(PerfilUsuario, db.session))