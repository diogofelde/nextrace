export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Painel de Monitoramento</h1>
      <span className="text-sm text-gray-500">Status: Operacional</span>
    </header>
  );
}