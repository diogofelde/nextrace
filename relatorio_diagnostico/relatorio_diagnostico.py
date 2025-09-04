import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import WebDriverException, NoSuchElementException

BASE_URL = "http://localhost:3000"
ROUTES = ["/", "/login", "/formulario"]
API_ENDPOINT = "/api/dados"
RELATORIO = "relatorio_diagnostico.txt"

def check_server():
 try:
 response = requests.get(BASE_URL)
 return response.status_code == 200
 except requests.exceptions.ConnectionError:
 return False

def check_routes():
 resultados = {}
 for route in ROUTES:
 try:
 response = requests.get(BASE_URL + route)
 resultados[route] = " OK" if response.status_code == 200 else f" Status {response.status_code}"
 except Exception as e:
 resultados[route] = f" Erro: {e}"
 return resultados

def check_api():
 try:
 response = requests.get(BASE_URL + API_ENDPOINT)
 if response.status_code == 200:
 data = response.json()
 if "nome" in data and "idade" in data:
 return " API funcionando e dados vlidos"
 else:
 return " API respondeu, mas dados incompletos"
 else:
 return f" API respondeu com status {response.status_code}"
 except Exception as e:
 return f" Erro ao conectar  API: {e}"

def check_ui_elements():
 try:
 driver = webdriver.Chrome()
 driver.get(BASE_URL + "/login")
 driver.find_element(By.ID, "email")
 driver.find_element(By.ID, "senha")
 driver.find_element(By.TAG_NAME, "button")
 driver.quit()
 return " Elementos de login encontrados"
 except NoSuchElementException as e:
 return f" Elemento no encontrado: {e}"
 except WebDriverException as e:
 return f" Erro com o navegador: {e}"

def gerar_relatorio():
 with open(RELATORIO, "w", encoding="utf-8") as f:
 f.write(" RELATRIO DE DIAGNSTICO DO APP\n")
 f.write("-----------------------------------\n\n")

 f.write(" Servidor:\n")
 f.write("Rodando\n" if check_server() else " Servidor no est ativo\n")

 f.write("\n Rotas principais:\n")
 rotas = check_routes()
 for rota, status in rotas.items():
 f.write(f"{rota}: {status}\n")

 f.write("\n API:\n")
 f.write(check_api() + "\n")

 f.write("\n Interface de login:\n")
 f.write(check_ui_elements() + "\n")

 f.write("\n Diagnstico concludo.\n")

 print(f"\n Relatrio gerado com sucesso: {RELATORIO}")

gerar_relatorio()