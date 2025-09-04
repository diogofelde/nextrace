from django.contrib import admin
from .models import Aluno, Curso, Missao, Nivel, Conquista

admin.site.register(Aluno)
admin.site.register(Curso)
admin.site.register(Missao)
admin.site.register(Nivel)
admin.site.register(Conquista)