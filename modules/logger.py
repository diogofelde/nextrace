import os
from datetime import datetime

def registrar_log(mensagem, nivel="INFO", caminho='D:\\Projeto\\NexTrace\\logs\\scanner.log'):
 os.makedirs(os.path.dirname(caminho), exist_ok=True)
 timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
 with open(caminho, 'a') as f:
 f.write(f"[{timestamp}] [{nivel}] {mensagem}\n")