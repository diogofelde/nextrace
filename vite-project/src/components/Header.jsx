import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { logout } = useAuth();

  return (
    <header>
      <button onClick={logout}>Sair</button>
    </header>
  );
}
