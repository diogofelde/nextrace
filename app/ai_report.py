import openai
import os

# Carrega a chave da API de forma segura
openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_report():
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {
                    "role": "user",
                    "content": (
                        "Gere um relatório de segurança cibernética para pequenas empresas, "
                        "incluindo práticas recomendadas, ameaças comuns e medidas de mitigação."
                    )
                }
            ],
            temperature=0.7,
            max_tokens=800
        )
        return response['choices'][0]['message']['content']
    except Exception as e:
        return f"Erro ao gerar relatório: {str(e)}"