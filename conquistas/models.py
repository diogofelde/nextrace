from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver

User = get_user_model()

class Nivel(models.Model):
    nome = models.CharField('Nome do Nível', max_length=100, unique=True)
    xp_minimo = models.PositiveIntegerField('XP Mínimo', unique=True)

    class Meta:
        ordering = ['xp_minimo']
        verbose_name = 'Nível'
        verbose_name_plural = 'Níveis'

    def __str__(self):
        return f'{self.nome} ({self.xp_minimo} XP)'


class PerfilUsuario(models.Model):
    usuario = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='perfil'
    )
    xp_total = models.PositiveIntegerField('XP Total', default=0)

    class Meta:
        verbose_name = 'Perfil de Usuário'
        verbose_name_plural = 'Perfis de Usuários'

    def __str__(self):
        return f'Perfil de {self.usuario.username}'

    def nivel_atual(self):
        """
        Retorna o nível correspondente ao XP acumulado.
        """
        return (
            Nivel.objects
            .filter(xp_minimo__lte=self.xp_total)
            .order_by('-xp_minimo')
            .first()
        )

    def proximo_nivel(self):
        """
        Retorna o próximo nível (ou