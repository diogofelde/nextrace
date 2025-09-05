import { FaHome, FaChartBar, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-8">NexTrace</h1>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
          <FaHome /> Dashboard
        </Link>
        <Link
          to="/alerts"
          className="flex items-center gap-2 hover:text-gray-300"
        >
          <FaChartBar /> Alertas
        </Link>
        <Link
          to="/settings"
          className="flex items-center gap-2 hover:text-gray-300"
        >
          <FaCog /> Configurações
        </Link>
      </nav>
    </div>
  );
}
