# Usa a imagem oficial do Python 3.11 como base
FROM python:3.11

# Evita que o Python crie arquivos .pyc
ENV PYTHONDONTWRITEBYTECODE 1

# Garante que o output do Python seja exibido diretamente no terminal
ENV PYTHONUNBUFFERED 1

# Define o diretório de trabalho dentro do container
WORKDIR /code

# Copia o arquivo de dependências para o container
COPY requirements.txt /code/

# Atualiza o pip e instala as dependências
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copia o restante dos arquivos do projeto para o container
COPY . /code/