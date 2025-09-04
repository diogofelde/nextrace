import React from 'react';
function KPIOverview() {
  const kpis = [
    { title: "Treinamentos Concluídos", value: "75%" },
    { title: "Alertas Ativos", value: "3" },
    { title: "Score de Risco", value: "Baixo" },
  ];

  return (
    <div className="kpi-overview">
      {kpis.map((kpi, index) => (
        <div key={index} className="kpi-card">
          <h3>{kpi.title}</h3>
          <p>{kpi.value}</p>
        </div>
      ))}
    </div>
  );
}

export default KPIOverview;
