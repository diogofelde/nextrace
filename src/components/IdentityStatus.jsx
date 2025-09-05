export default function IdentityStatus() {
  const identities = [
    { nome: 'admin@nextrace.com', status: 'Ativo' },
    { nome: 'analista@empresa.com', status: 'Bloqueado' },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Status de Identidades</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Usuário</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {identities.map((user) => (
            <tr key={user.nome} className="border-t">
              <td className="px-4 py-2">{user.nome}</td>
              <td className="px-4 py-2">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}