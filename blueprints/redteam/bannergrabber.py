import socket

def coletar_banner(ip, porta):
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.settimeout(3)
            s.connect((ip, int(porta)))
            banner = s.recv(1024).decode(errors='ignore').strip()
            return banner if banner else "Nenhum banner retornado."
    except socket.timeout:
        return "Tempo limite excedido ao conectar."
    except ConnectionRefusedError:
        return "Conexão recusada pelo host."
    except Exception as e:
        return f"Erro ao coletar banner: {e}"