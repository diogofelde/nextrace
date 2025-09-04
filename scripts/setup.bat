@echo off
echo 🔧 Iniciando configuração do NexTrace...

REM Ativar ambiente virtual (se existir)
IF EXIST venv (
    call venv\Scripts\activate
)

REM Instalar pacotes
py -m pip install --upgrade pip
py -m pip install python-nmap flask flask-wtf flask-sqlalchemy streamlit pytest

REM Criar banco de dados
echo 🧱 Criando banco de dados...
py -c "from app import create_app, db; app = create_app(); with app.app_context(): db.create_all()"

REM Iniciar servidor Flask
echo 🚀 Iniciando servidor Flask...
flask --app main run
