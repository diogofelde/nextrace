import uuid

def gerar_serial():
 parte1 = uuid.uuid4().hex[:4].upper()
 parte2 = uuid.uuid4().hex[:4].upper()
 return f"CSA-{parte1}-{parte2}"

# Gerar 10 chaves
for _ in range(10):
 print(gerar_serial())