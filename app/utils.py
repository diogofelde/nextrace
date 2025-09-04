from app.models import Usuario
from flask_login import LoginManager

def setup_login(app):
    login_manager = LoginManager()
    login_manager.init_app(app)
    login_manager.login_view = 'login'  # Nome da rota de login
    login_manager.login_message = "Você precisa estar logado para acessar esta página."

    @login_manager.user_loader
    def load_user(user_id):
        return Usuario.query.get(int(user_id))

    return login_manager