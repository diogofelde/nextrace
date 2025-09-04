import sys
import unittest

from NexTrace.ansi import Fore
from NexTrace.ansitowin32 import AnsiToWin32

# Guarda os streams originais
stdout_orig = sys.stdout
stderr_orig = sys.stderr

class TestAnsiToWin32(unittest.TestCase):

    def setUp(self):
        # Garante que os streams não estão redirecionados para AnsiToWin32
        self.assertNotIsInstance(sys.stdout, AnsiToWin32)
        self.assertNotIsInstance(sys.stderr, AnsiToWin32)

    def tearDown(self):
        # Restaura os streams originais
        sys.stdout = stdout_orig
        sys.stderr = stderr_orig

    def test_fore_red_code(self):
        # Verifica se o código ANSI para vermelho está correto
        self.assertEqual(Fore.RED, '\033