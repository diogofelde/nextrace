import os
import json
import csv
from datetime import datetime
from modules.logger import registrar_log

def exportar(resultados, host, pasta='D:\\Projeto\\NexTrace\\exports'):
 os.makedirs(pasta, exist_ok=True)
 timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')

 paths = {}

 try:
 json_path = os.path.join(pasta, f'{host}_{timestamp}.json')
 with open(json_path, 'w') as f:
 json.dump(resultados, f, indent=4)
 registrar_log(f"Exportado para JSON: {json_path}")
 paths['json'] = json_path
 except Exception as e:
 registrar_log(f"Erro ao exportar JSON: {e}", nivel="ERROR")

 try:
 csv_path = os.path.join(pasta, f'{host}_{timestamp}.csv')
 with open(csv_path, 'w', newline='') as f:
 writer = csv.DictWriter(f, fieldnames=['host', 'protocol', 'port', 'state'])
 writer.writeheader()
 writer.writerows(resultados)
 registrar_log(f"Exportado para CSV: {csv_path}")
 paths['csv'] = csv_path
 except Exception as e:
 registrar_log(f"Erro ao exportar CSV: {e}", nivel="ERROR")

 try:
 txt_path = os.path.join(pasta, f'{host}_{timestamp}.txt')
 with open(txt_path, 'w') as f:
 for r in resultados:
 f.write(f"{r['host']} - {r['protocol']}:{r['port']} - {r['state']}\n")
 registrar_log(f"Exportado para TXT: {txt_path}")
 paths['txt'] = txt_path
 except Exception as e:
 registrar_log(f"Erro ao exportar TXT: {e}", nivel="ERROR")

 return paths