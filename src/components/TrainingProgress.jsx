export default function TrainingProgress() {
  const trainings = [
    { nome: 'Simulação de Ataque', progresso: 80 },
    { nome: 'Resposta a Incidentes', progresso: 45 },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Progresso de Treinamentos</h2>
      <ul className="space-y-2">
        {trainings.map((item) => (
          <li key={item.nome}>
            <div className="flex justify-between text-sm font-medium text-gray-700">
              <span>{item.nome}</span>
              <span>{item.progresso}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2 mt-1">
              <div className="bg-blue-500 h-2 rounded" style={{ width: `${item.progresso}%` }}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}