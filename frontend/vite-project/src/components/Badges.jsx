export default function Badges({ conquistas }) {
  const badgeMap = {
    "🎓 Mestre dos Módulos": "badge-mestre.png",
    "⏱️ Maratonista da Segurança": "badge-maratonista.png",
    "🚀 Primeiros Passos": "badge-iniciante.png",
  };

  return (
    <div>
      <h2>Badges</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {conquistas.map((c, i) => (
          <div key={i}>
            <img src={`/badges/${badgeMap[c]}`} alt={c} width="80" />
            <p>{c}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
