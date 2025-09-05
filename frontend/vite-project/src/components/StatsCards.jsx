export default function StatsCards() {
  const stats = [
    {
      label: "Cursos Concluídos",
      value: 12,
      color: "bg-green-100 text-green-800",
    },
    {
      label: "Cursos em Andamento",
      value: 3,
      color: "bg-yellow-100 text-yellow-800",
    },
    { label: "Horas Estudadas", value: 48, color: "bg-blue-100 text-blue-800" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {stats.map((stat, index) => (
        <div key={index} className={`p-6 rounded-lg shadow ${stat.color}`}>
          <h3 className="text-lg font-semibold">{stat.label}</h3>
          <p className="text-3xl font-bold mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
