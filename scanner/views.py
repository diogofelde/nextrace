from flask import Blueprint, render_template, request
from flask_login import login_required
from .nmap_utils import run_scan

scanner_bp = Blueprint('scanner', __name__) # <-- ESTA LINHA DEVE VIR ANTES DAS ROTAS

@scanner_bp.route('/', methods=['GET', 'POST'])
@login_required
def index():
 results = None
 if request.method == 'POST':
 target = request.form.get('target')
 results = run_scan(target)
 return render_template('index.html', results=results)