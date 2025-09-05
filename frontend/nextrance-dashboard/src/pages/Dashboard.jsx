import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Usuários Ativos" value="1.245" />
      <Card title="Alertas de Segurança" value="32" />
      <Card title="Status do Sistema" value="100%" />
    </div>
  );
}
