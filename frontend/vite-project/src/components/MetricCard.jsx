function MetricCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4">
      <div className="text-indigo-600">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

export default MetricCard;
