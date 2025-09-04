# academy/wsgi.py

import os
from django.core.wsgi import get_wsgi_application

# Define o módulo de configurações que o WSGI irá usar
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'academy.settings')

# Cria o objeto WSGI que o servidor (e.g. Gunicorn, uWSGI) utilizará
application = get_wsgi_application()