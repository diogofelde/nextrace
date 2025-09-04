from flask import Blueprint, render_template, request
from blueprints.redteam.scanner import executar_nmap
from blueprints.redteam.bannergrabber import coletar_banner
from blueprints.redteam.direnum import executar_dirsearch

red_bp = Blueprint('redteam', __name__, template_folder='templates/redteam')

@red_bp.route('/scan', methods=['GET', 'POST'])
def scan():
    resultado = ''
    if request.method == 'POST':
        ip = request.form.get('ip')
        resultado = executar_nmap(ip)
    return render_template('scan.html', resultado=resultado)

@red_bp.route('/banner', methods=['GET', 'POST'])
def banner():
    resultado = ''
    if request.method == 'POST':
        ip = request.form.get('ip')
        porta = request.form.get('porta')
        resultado = coletar_banner(ip, porta)
    return render_template('banner.html', resultado=resultado)

@red_bp.route('/direnum', methods=['GET', 'POST'])
def direnum():
    resultado = ''
    if request.method == 'POST':
        url = request.form.get('url')
        resultado = executar_dirsearch(url)
    return render_template('direnum.html', resultado=resultado)