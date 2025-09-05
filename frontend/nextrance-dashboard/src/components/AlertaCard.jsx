// src/components/AlertaCard.jsx
export default function AlertaCard({ alerta, onResolvido }) {
  return (
    <li className="border p-4 rounded shadow">
      <h2 className="font-semibold text-lg">{alerta.id}</h2>
      <p className="text-gray-700">{alerta.descriptions?.[0]?.value}</p>
      <p className="text-sm text-gray-500">Publicado em: {alerta.published}</p>

      <p className="text-sm text-gray-500">
        Status: {alerta.resolvido ? "✅ Resolvido" : "🕒 Pendente"}
      </p>

      {alerta.resolvido && alerta.dataResolucao && (
        <p className="text-sm text-gray-400">
          Resolvido em:{" "}
          {new Date(alerta.dataResolucao).toLocaleDateString("pt-BR")}
        </p>
      )}

      {!alerta.resolvido && (
        <button
          onClick={() => onResolvido(alerta.id)}
          className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
        >
          Marcar como resolvido
        </button>
      )}
    </li>
  );
}
