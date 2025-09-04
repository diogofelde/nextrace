import nmap

def run_scan(target):
 scanner = nmap.PortScanner()
 try:
 scanner.scan(hosts=target, arguments='-sV')
 return scanner[target]
 except Exception as e:
 return {'error': str(e)}