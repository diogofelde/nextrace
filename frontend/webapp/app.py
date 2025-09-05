import os, json
from flask import Flask, render_template, redirect, url_for, request, session
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'NexTraceSuperSecreto'

USERNAME = 'admin'
PASSWORD = '1234'

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
QUARANTINE_DIR = os.path.join(BASE_DIR, '_duplicatas_quarentena')
LOG_PATH = os.path.join(os.path.dirname(__file__), 'logs', 'restore_log.json')

os.makedirs(QUARANTINE_DIR, exist_ok=True)
os.makedirs(os.path.dirname(LOG_PATH), exist_ok=True)

def log_restore(filename):
 log_entry = {"filename": filename, "timestamp": datetime.now().isoformat()}
 data = []
 if os.path.exists(LOG_PATH):
 with open(LOG_PATH, 'r') as f:
 data = json.load(f)
 data.append(log_entry)
 with open(LOG_PATH, 'w') as f:
 json.dump(data, f, indent=4)

@app.route('/login', methods=['GET', 'POST'])
def login():
 if request.method == 'POST':
 if request.form['username'] == USERNAME and request.form['password'] == PASSWORD:
 session['logged_in'] = True
 return redirect(url_for('index'))
 return render_template('login.html', error='Credenciais invlidas')
 return render_template('login.html')

@app.route('/logout')
def logout():
 session.pop('logged_in', None)
 return redirect(url_for('login'))

@app.route('/')
def index():
 if not session.get('logged_in'):
 return redirect(url_for('login'))
 ext = request.args.get('ext')
 files = os.listdir(QUARANTINE_DIR)
 if ext:
 files = [f for f in files if f.endswith(ext)]
 return render_template('index.html', files=files, ext=ext)

@app.route('/restore/<filename>')
def restore(filename):
 if not session.get('logged_in'):
 return redirect(url_for('login'))
 src = os.path.join(QUARANTINE_DIR, filename)
 dest = os.path.join(BASE_DIR, filename)
 if os.path.exists(src):
 os.rename(src, dest)
 log_restore(filename)
 return redirect(url_for('index'))

@app.route('/upload', methods=['POST'])
def upload():
 if not session.get('logged_in'):
 return redirect(url_for('login'))
 file = request.files['file']
 if file:
 file.save(os.path.join(QUARANTINE_DIR, file.filename))
 return redirect(url_for('index'))

if __name__ == "__main__":
 app.run(debug=True)