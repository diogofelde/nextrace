from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Conquista(models.Model):
    nome = models.CharField(max_length=100, unique=True)
    descricao = models.TextField()
    icone = models.ImageField(upload_to='conquistas/')
    xp_necessario = models.PositiveIntegerField(db_index=True)

    class Meta:
        ordering = ['xp_necessario']
        verbose_name = 'Conquista'
        verbose_name_plural = 'Conquistas'

    def __str__(self):
        return f'{self.nome} ({self.xp_necessario} XP)'


class ConquistaUsuario(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, related_name='conquistas')
    conquista = models.ForeignKey(Conquista, on_delete=models.CASCADE)
    data_conquista = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('usuario', 'conquista')
        ordering = ['-data_conquista']
        verbose_name = 'Conquista do Usuário'
        verbose_name_plural = 'Conquistas de Usuários'

    def __str__(self):
        return f'{self.usuario.username} ganhou {self.conquista.nome}'