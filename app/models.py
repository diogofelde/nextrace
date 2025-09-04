from app import db

class Aluno(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    data_nascimento = db.Column(db.Date, nullable=False)

    conquistas = db.relationship('Conquista', backref='aluno', lazy=True)

    def __repr__(self):
        return f"<Aluno {self.nome}>"

class Curso(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    descricao = db.Column(db.Text, nullable=True)

    missoes = db.relationship('Missao', backref='curso', lazy=True)

    def __repr__(self):
        return f"<Curso {self.nome}>"

class Nivel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(50), nullable=False)
    dificuldade = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"<Nivel {self.nome} - Dificuldade {self.dificuldade}>"

class Missao(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(100), nullable=False)
    descricao = db.Column(db.Text, nullable=True)
    concluida = db.Column(db.Boolean, default=False)

    curso_id = db.Column(db.Integer, db.ForeignKey('curso.id'), nullable=False)
    conquistas = db.relationship('Conquista', backref='missao', lazy=True)

    def __repr__(self):
        return f"<Missao {self.titulo} - Concluída: {self.concluida}>"

class Conquista(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    descricao = db.Column(db.Text, nullable=True)

    aluno_id = db.Column(db.Integer, db.ForeignKey('aluno.id'), nullable=False)
    missao_id = db.Column(db.Integer, db.ForeignKey('missao.id'), nullable=False)

    def __repr__(self):
        return f"<Conquista {self.nome} - Aluno: {self.aluno.nome}>"