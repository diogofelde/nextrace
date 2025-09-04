from fpdf import FPDF
import os

def generate_pdf(content, filename="report.pdf", font="Arial", size=12):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font(font, size=size)

    # Garante que o conteúdo seja tratado linha por linha
    for line in content.strip().split('\n'):
        pdf.multi_cell(0, 10, line)

    # Salva o PDF no caminho especificado
    pdf.output(filename)

    return os.path.abspath(filename)