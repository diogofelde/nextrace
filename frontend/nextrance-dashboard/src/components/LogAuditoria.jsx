// src/components/LogAuditoria.jsx
export default function LogAuditoria({ log, onExportar }) {
  return (
    <div className="mt-10">
      <h3 className="text-lg font-bold mb-2">📋 Log de Auditoria</h3>
      <button
        onClick={onExportar}
        className="mb-4 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
      >
        📤 Exportar Log
      </button>
      <table className="w-full text-sm border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1 text-left">Usuário</th>
            <th className="border px-2 py-1 text-left">Ação</th>
            <th className="border px-2 py-1 text-left">Data</th>
          </tr>
        </thead>
        <tbody>
          {log.map((entrada, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-2 py-1">{entrada.usuario}</td>
              <td className="border px-2 py-1">{entrada.acao}</td>
              <td className="border px-2 py-1">
                {new Date(entrada.data).toLocaleString("pt-BR")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
