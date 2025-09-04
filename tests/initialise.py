import sys
import unittest
from unittest import skipUnless
from unittest.mock import patch, Mock

from NexTrace.ansitowin32 import StreamWrapper
from NexTrace.initialise import init, _wipe_internal_state_for_tests

# Guarda os streams originais
orig_stdout = sys.stdout
orig_stderr = sys.stderr


class TestInitialisation(unittest.TestCase):

    @skipUnless(sys.stdout.isatty(), "sys.stdout is not um terminal (tty)")
    def setUp(self):
        self.assertNotWrapped()

    def tearDown(self):
        _wipe_internal_state_for_tests()
