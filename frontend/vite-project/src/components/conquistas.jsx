export default function Conquistas({ cursosConcluidos, horasEstudadas }) {
  const conquistas = [];

  if (cursosConcluidos >= 10) conquistas.push("🎓 Mestre dos Módulos");
  if (horasEstudadas >= 40) conquistas.push("⏱️ Maratonista da Segurança");
  if (cursosConcluidos >= 1 && horasEstudadas >= 5)
    conquistas.push("🚀 Primeiros Passos");

  return (
    <div>
      <h2>Conquistas</h2>
      <ul>
        {conquistas.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
