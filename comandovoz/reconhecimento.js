<button id="btnVoz">Falar com o mascote</button>
<span id="status"></span>
<input id="fallbackText" type="text" placeholder="Digite seu comando" style="display:none;" />

<script>
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const btn = document.getElementById('btnVoz');
  const status = document.getElementById('status');
  const fallback = document.getElementById('fallbackText');

  if (!SpeechRecognition) {
    // Fallback para texto
    btn.style.display = 'none';
    fallback.style.display = 'inline-block';
    fallback.addEventListener('keydown', e => {
      if (e.key === 'Enter') responderMascote(e.target.value);
    });
  } else {
    const reconhecimento = new SpeechRecognition();
    reconhecimento.lang = 'pt-BR';
    reconhecimento.interimResults = false;
    reconhecimento.maxAlternatives = 1;

    reconhecimento.onstart = () => {
      btn.disabled = true;
      status.textContent = '🔴 Gravando...';
    };

    reconhecimento.onresult = (e) => {
      const comando = e.results[0][0].transcript.toLowerCase().trim();
      processarComando(comando);
    };

    reconhecimento.onend = () => {
      btn.disabled = false;
      status.textContent = '';
    };

    reconhecimento.onerror = (e) => {
      console.error('Erro no reconhecimento:', e.error);
      status.textContent = '⚠️ Erro: ' + e.error;
      btn.disabled = false;
    };

    btn.addEventListener('click', () => reconhecimento.start());
  }

  // Mapeamento de comandos para respostas
  const comandos = {
    dica: 'Aqui vai uma dica: revise os conceitos antes de avançar.',
    ajuda: 'Claro, em que parte do projeto você precisa de ajuda?',
    olá: 'Olá! Em que posso ajudar hoje?',
    resumo: 'Resumo do NexTrace: plataforma imersiva de eventos interativos.'
    // adicione quantos pares comando→resposta precisar
  };

  function processarComando(texto) {
    for (let chave in comandos) {
      if (texto.includes(chave)) {
        return falarMascote(comandos[chave]);
      }
    }
    falarMascote('Não entendi, tente novamente.');
  }

  function falarMascote(mensagem) {
    const utter = new SpeechSynthesisUtterance(mensagem);
    utter.lang = 'pt-BR';
    utter.rate = 1;
    utter.pitch = 1.1;
    speechSynthesis.speak(utter);
  }
</script>