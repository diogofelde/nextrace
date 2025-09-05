export default function Navbar() {
  return (
    <div className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold">Painel de Segurança</h2>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Olá, Diogo 👋</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          className="rounded-full w-10 h-10"
        />
      </div>
    </div>
  );
}

import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">NexTrace</h1>
      <button onClick={handleLogout} className="bg-red-600 px-3 py-1 rounded">
        Sair
      </button>
    </div>
  );
}
