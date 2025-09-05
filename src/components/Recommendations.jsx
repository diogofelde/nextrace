export default function Recommendations() {
  const tips = [
    'Atualize o firewall para bloquear IPs suspeitos detectados nas últimas 24h.',
    'Revise permissões de usuários com acesso administrativo.',
    'Execute varredura de integridade nos servidores expostos.',
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Recomendações de Segurança</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {tips.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}