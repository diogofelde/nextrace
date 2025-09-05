export default function AlertsTable() {
  const alerts = [
    { id: 1, tipo: 'Login suspeito', data: '22/08/2025', status: 'Pendente' },
    { id: 2, tipo: 'Vazamento de dados', data: '20/08/2025', status: 'Resolvido' },
  ];

  return (
    <div>
      <h2>Alertas Recentes</h2>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Data</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alerta) => (
            <tr key={alerta.id}>
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