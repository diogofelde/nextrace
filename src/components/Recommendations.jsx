import React from 'react';
function Recommendations() {
  const actions = [
    "Atualizar senha do e-mail",
    "Concluir módulo de Engenharia Social",
    "Revisar configurações de privacidade",
  ];

  return (
    <div className="recommendations">
      <h3>Ações Recomendadas</h3>
      <ul>
        {actions.map((action, index) => (
          <li key={index}>
            <input type="checkbox" /> {action}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;
