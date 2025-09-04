import sys
import unittest
from unittest.mock import Mock, patch

from NexTrace.winterm import WinColor, WinStyle, WinTerm

class TestWinTerm(unittest.TestCase):

    @patch('colorama.winterm.win32')
    def test_init_console_attributes(self, mock_win32):
        # Simula atributos de cor do console
        mock_attr = Mock()
        mock_attr.wAttributes = 7 + 6 * 16 + 8  # Fore=7, Back=6, Style=8
        mock_win32.GetConsoleScreenBufferInfo.return_value = mock_attr

        term = WinTerm()

        self.assertEqual(term._fore, 7, "Fore color incorreto")
        self.assertEqual(term._back, 6, "Back color incorreto")
        self.assertEqual(term._style, 8, "Style incorreto")

class TestExemplo(unittest.TestCase):

    def test_soma_simples(self):
        resultado = 2 + 2
        self.assertEqual(resultado, 4, "A soma simples falhou")

if __name__ == '__main__':
    unittest.main()