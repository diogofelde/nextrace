import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Dashboard" },
    { path: "/cursos", label: "Cursos" },
    { path: "/perfil", label: "Perfil" },
  ];

  return (
    <div className="w-64 bg-blue-800 text-white p-6">
      <h2 className="text-xl font-bold mb-6">NexTrace</h2>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`hover:text-blue-300 ${location.pathname === link.path ? "font-bold underline" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
