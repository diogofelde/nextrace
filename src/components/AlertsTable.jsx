import React from 'react';
function AlertsTable() {
  const alerts = [
    { tipo: "Login suspeito", data: "22/08/2025", status: "Pendente" },
    { tipo: "Vazamento de dados", data: "20/08/2025", status: "Resolvido" },
  ];

  return (
    <div className="alerts-table">
      <h3>Alertas Recentes</h3>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Data</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alerta, index) => (
            <tr key={index}>
              <td>{alerta.tipo}</td>
              <td>{alerta.data}</td>
              <td>{alerta.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlertsTable;
