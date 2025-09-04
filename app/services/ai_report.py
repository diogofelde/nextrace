import openai
import os
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

def gerar_relatorio():
 prompt = "Gere um relatrio de segurana ciberntica para pequenas empresas."
 resposta = openai.ChatCompletion.create(
 model="gpt-4",
 messages=[{"role": "user", "content": prompt}]
 )
 return resposta.choices[0].message.content