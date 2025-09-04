from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from app import app, db
from app.models import Nivel, Conquista, PerfilUsuario, ConquistaUsuario

admin = Admin(app, name='NexTrace Admin', template_mode='bootstrap4')

# Registra os modelos no painel
admin.add_view(ModelView(Nivel, db.session))
admin.add_view(ModelView(Conquista, db.session))
admin.add_view(ModelView(PerfilUsuario, db.session))
admin.add_view(ModelView(ConquistaUsuario, db.session))