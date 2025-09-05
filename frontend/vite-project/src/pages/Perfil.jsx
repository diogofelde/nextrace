import { useState, useEffect } from "react";
import { buscarDados, salvarProgresso } from "../services/usuario";
import { useAuth } from "../context/AuthContext";

export default function Perfil() {
  const { usuario } = useAuth();
  const [nome, setNome] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    async function carregar() {
      const dados = await buscarDados(usuario.uid);
      if (dados) {
        setNome(dados.nome || "");
        setBio(dados.bio || "");
      }
    }
    carregar();
  }, [usuario]);

  const salvar = async () => {
    await salvarProgresso(usuario.uid, { nome, bio });
    alert("Perfil atualizado!");
  };

  return (
    <div>
      <h1>Perfil</h1>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
      />
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Bio"
      />
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
