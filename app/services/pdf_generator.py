from fpdf import FPDF

def gerar_pdf(texto):
 pdf = FPDF()
 pdf.add_page()
 pdf.set_font("Arial", size=12)
 for linha in texto.split('\n'):
 pdf.multi_cell(0, 10, linha)
 caminho = "relatorio.pdf"
 pdf.output(caminho)
 return caminho