import os
import shutil
import subprocess
from datetime import datetime

# Arquivos que devem permanecer na raiz
ESSENCIAIS = [
    "gerenciador_projeto.py",
    "main.py",
    "manage.py",
    "run.py",
    "README.md",
    "requirements.txt",
    "docker-compose.yml",
    "docker-compose.prod.yml",
    "render.yaml",
    "runtime.txt"
]

# Pastas de destino por tipo
PASTAS_DESTINO = {
    "scripts": [".ps1", ".sh", ".bat"],
    "auditoria": ["auditoria_", "relatorio_"],
    "dados": [".csv", ".txt", ".db", ".json"],
    "app": ["main_app.py", "dashboard.py", "db.py", "models.py", "usuario.py", "utils.py", "ext.py", "config.py", "settings_prod.py"],
    "tests": ["test_", "tests.py"],
    "web": [".html", ".css", ".js", "package.json", "vite.config.js", "tailwind.config.js", "postcss.config.js"]
}

# Lixo digital
EXTENSOES_LIXO = ['.log', '.tmp', '.bak']
PASTAS_LIXO = ['__pycache__', 'node_modules', '.pytest_cache']

LOG_PATH = "log_gerenciador.txt"

def log_acao(msg):
    with open(LOG_PATH, "a", encoding="utf-8") as log:
        log.write(f"{datetime.now()} - {msg}\n")

def executar_essenciais():
    for script in ESSENCIAIS:
        if script.endswith(".py") and os.path.exists(script):
            try:
                subprocess.run(["python", script], check=True)
                log_acao(f"Executado com sucesso: {script}")
            except subprocess.CalledProcessError as e:
                log_acao(f"Erro ao executar {script}: {e}")

def limpar_lixo():
    for raiz, pastas, arquivos in os.walk(os.getcwd()):
        for pasta in pastas:
            if pasta in PASTAS_LIXO:
                caminho = os.path.join(raiz, pasta)
                try:
                    shutil.rmtree(caminho)
                    log_acao(f"Pasta removida: {caminho}")
                except Exception as e:
                    log_acao(f"Erro ao remover pasta {caminho}: {e}")
        for arquivo in arquivos:
            ext = os.path.splitext(arquivo)[1]
            if ext in EXTENSOES_LIXO:
                caminho = os.path.join(raiz, arquivo)
                try:
                    os.remove(caminho)
                    log_acao(f"Arquivo removido: {caminho}")
                except Exception as e:
                    log_acao(f"Erro ao remover arquivo {caminho}: {e}")

def excluir_obsoletos():
    arquivos = [f for f in os.listdir() if f.endswith(".py") or f.endswith(".ps1")]
    for arquivo in arquivos:
        if arquivo not in ESSENCIAIS:
            try:
                os.remove(arquivo)
                log_acao(f"Script obsoleto removido: {arquivo}")
            except Exception as e:
                log_acao(f"Erro ao remover {arquivo}: {e}")

def reorganizar_arquivos():
    for arquivo in os.listdir():
        if arquivo in ESSENCIAIS or os.path.isdir(arquivo):
            continue

        destino = None
        ext = os.path.splitext(arquivo)[1]

        for pasta, regras in PASTAS_DESTINO.items():
            for regra in regras:
                if arquivo.startswith(regra) or ext == regra or arquivo == regra:
                    destino = pasta
                    break
            if destino:
                break

        if destino:
            os.makedirs(destino, exist_ok=True)
            novo_caminho = os.path.join(destino, arquivo)
            try:
                shutil.move(arquivo, novo_caminho)
                log_acao(f"Movido: {arquivo} → {destino}/")
            except Exception as e:
                log_acao(f"Erro ao mover {arquivo}: {e}")

def gerenciar_projeto():
    log_acao("🟢 Início do gerenciamento completo")
    executar_essenciais()
    limpar_lixo()
    excluir_obsoletos()
    reorganizar_arquivos()
    log_acao("✅ Gerenciamento concluído")

if __name__ == "__main__":
    gerenciar_projeto()
