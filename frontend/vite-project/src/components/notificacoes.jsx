export default function Notificacoes({ notificacoes }) {
  return (
    <div>
      <h2>Notificações</h2>
      <ul>
        {notificacoes.map((n, i) => (
          <li key={i}>
            <strong>{n.titulo}</strong>: {n.mensagem}
          </li>
        ))}
      </ul>
    </div>
  );
}
