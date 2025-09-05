export default function KPIOverview() {
  const kpis = [
    { id: 'incidentes-hoje', label: 'Incidentes Hoje', value: 5 },
    { id: 'tempo-resposta-medio', label: 'Tempo de Resposta Médio', value: '3min' },
    { id: 'sistemas-monitorados', label: 'Sistemas Monitorados', value: 12 },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Indicadores de Segurança</h2>
      <div className="grid grid-cols-3 gap-4">
        {kpis.map((kpi) => (
          <div key={kpi.id} className="bg-gray-100 p-4 rounded text-center">
            <div className="text-2xl font-bold text-blue-600">{kpi.value}</div>
            <div className="text-sm text-gray-600">{kpi.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}