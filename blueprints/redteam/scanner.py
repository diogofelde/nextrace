import subprocess

def executar_nmap(ip_alvo):
    try:
        comando = ['nmap', '-sS', '-Pn', ip_alvo]
        resultado = subprocess.run(comando, capture_output=True, text=True, timeout=15)

        if resultado.returncode != 0:
            return f"Erro na execução do Nmap:\n{resultado.stderr.strip()}"

        return resultado.stdout.strip()

    except subprocess.TimeoutExpired:
        return "Tempo limite excedido ao executar Nmap."
    except FileNotFoundError:
        return "Nmap não está instalado ou não foi encontrado no sistema."
    except Exception as e:
        return f"Erro inesperado ao executar Nmap: {e}"