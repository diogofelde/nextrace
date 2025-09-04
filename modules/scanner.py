import nmap
from modules.logger import registrar_log

def escanear(host, portas='1-1024'):
 scanner = nmap.PortScanner()
 registrar_log(f"Iniciando escaneamento em {host} nas portas {portas}")

 try:
 scanner.scan(hosts=host, arguments=f'-sS -p {portas}')
 except Exception as e:
 registrar_log(f"Erro ao escanear {host}: {e}", nivel="ERROR")
 return []

 resultados = []
 if host in scanner.all_hosts():
 for proto in scanner[host].all_protocols():
 for port in scanner[host][proto].keys():
 state = scanner[host][proto][port]['state']
 resultados.append({
 'host': host,
 'protocol': proto,
 'port': port,
 'state': state
 })
 registrar_log(f"{host} - Porta {port}/{proto}: {state}")
 else:
 registrar_log(f"Nenhum dado retornado para {host}", nivel="WARNING")

 return resultados