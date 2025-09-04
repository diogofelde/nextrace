import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    async function carregarCursos() {
      const querySnapshot = await getDocs(collection(db, "cursos"));
      const lista = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCursos(lista);
    }
    carregarCursos();
  }, []);

  return (
    <div>
      <h1>Meus Cursos</h1>
      {cursos.map((curso) => (
        <div key={curso.id}>
          <h2>{curso.titulo}</h2>
          <p>{curso.descricao}</p>
          <progress value={curso.progresso} max="100" />
          <span>{curso.progresso}% concluído</span>
        </div>
      ))}
    </div>
  );
}
