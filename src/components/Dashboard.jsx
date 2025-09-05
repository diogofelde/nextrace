export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div>Sidebar</div>
      <div className="flex-1 flex flex-col">
        <div>Header</div>
        <main className="p-6 space-y-6 overflow-y-auto">
          <h1>Painel de Monitoramento</h1>
          <div>KPIOverview</div>
          <div>TrainingProgress</div>
          <div>Chart</div>
          <div>AlertsTable</div>
          <div>IdentityStatus</div>
          <div>Recommendations</div>
        </main>
      </div>
    </div>
  );
}