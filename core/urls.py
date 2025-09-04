# core/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # Painel administrativo
    path('admin/', admin.site.urls),

    # Rotas do Scout APM
    path('scout/', include('scout.urls')),

    # Rotas do seu app principal—substitua 'core_app' pelo nome real do seu app
    path('', include('core_app.urls')),
]

# core_app/urls.py
from django.urls import path
from .views import home, teste

urlpatterns = [
    # Página inicial
    path('', home, name='home'),

    # Rota de teste
    path('teste/', teste, name='teste'),
]