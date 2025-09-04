# app.py
from flask import Flask
from dotenv import load_dotenv
import os
from ext import db # Importa do ext.py

load_dotenv()

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Importa o modelo s depois de configurar o app
with app.app_context():
 from models import Usuario
 db.create_all()

@app.route('/')
def home():
 return 'NexTrace est rodando!'

if __name__ == '__main__':
 app.run(debug=True)