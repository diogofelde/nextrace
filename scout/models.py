from django.db import models

class Aluno(models.Model):
 nome = models.CharField(max_length=100)
 email = models.EmailField(unique=True)
 data_nascimento = models.DateField()

 def __str__(self):
 return self.nome

class Curso(models.Model):
 nome = models.CharField(max_length=100)
 descricao = models.TextField()

 def __str__(self):
 return self.nome

class Nivel(models.Model):
 nome = models.CharField(max_length=50)
 dificuldade = models.IntegerField()

 def __str__(self):
 return f"{self.nome} (Dificuldade: {self.dificuldade})"

class Missao(models.Model):
 titulo = models.CharField(max_length=100)
 descricao = models.TextField()
 concluida = models.BooleanField(default=False)
 curso = models.ForeignKey(Curso, on_delete=models.CASCADE, related_name='missoes')

 def __str__(self):
 return f"{self.titulo} ({'' if self.concluida else ''})"

class Conquista(models.Model):
 nome = models.CharField(max_length=100)
 descricao = models.TextField()
 aluno = models.ForeignKey(Aluno, on_delete=models.CASCADE, related_name='conquistas')
 missao = models.ForeignKey(Missao, on_delete=models.CASCADE, related_name='conquistas')

 def __str__(self):
 return f"{self.nome} - {self.aluno.nome}"