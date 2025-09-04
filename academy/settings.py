import os
from dotenv import load_dotenv
from pathlib import Path

# Carrega variáveis do .env
load_dotenv()

BASE_DIR = Path(__file__).resolve().parent

class Config:
    # Segurança
    SECRET_KEY = os.getenv('SECRET_KEY', 'chave-padrao-insegura')
    DEBUG = os.getenv('DEBUG', 'False').lower() == 'true'

    # Banco de dados
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Internacionalização
    LANGUAGE_CODE = 'pt-br'
    TIME_ZONE = 'America/Sao_Paulo'

    # Arquivos estáticos
    STATIC_FOLDER = 'static'
    STATIC_URL_PATH = '/static'

    # Arquivos de mídia
    MEDIA_FOLDER = os.path.join(BASE_DIR, 'media')
    MEDIA_URL = '/media'

    # Logging básico
    LOG_LEVEL = 'INFO'