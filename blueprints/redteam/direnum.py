import subprocess
import os

def executar_dirsearch(url_alvo):
    try:
        caminho_script = os.path.join('tools', 'dirsearch', 'dirsearch.py')
        caminho_relatorio = os.path.join('tools', 'dirsearch', 'report.txt')

        comando = [
            'python', caminho_script,
            '-u', url_alvo,
            '-e', 'php,html,js',
            '--plain-text-report', caminho_relatorio
        ]

        resultado = subprocess.run(comando, capture_output=True, text=True)

        if resultado.returncode != 0:
            return f"Erro na execução do Dirsearch:\n{resultado.stderr}"

        if not os.path.exists(caminho_relatorio):
            return "Relatório não foi gerado."

        with open(caminho_relatorio, 'r', encoding='utf-8') as f:
            return f.read()

    except Exception as e:
        return f"Erro ao executar Dirsearch: {e}"