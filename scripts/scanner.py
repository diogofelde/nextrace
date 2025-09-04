import nmap

def diagnostico_rede(alvo):
 scanner = nmap.PortScanner()
 scanner.scan(hosts=alvo, arguments='-sS')
 for host in scanner.all_hosts():
 print(f"Host: {host} ({scanner[host].hostname()})")
 print(f"Status: {scanner[host].state()}")
 for proto in scanner[host].all_protocols():
 print(f"Protocolo: {proto}")
 ports = scanner[host][proto].keys()
 for port in sorted(ports):
 print(f"Porta: {port}\tEstado: {scanner[host][proto][port]['state']}")

# Teste local
diagnostico_rede("127.0.0.1")