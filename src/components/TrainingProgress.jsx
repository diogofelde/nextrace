import React from 'react';
import { Bar } from "react-chartjs-2";

function TrainingProgress() {
  const data = {
    labels: ["Phishing", "Senhas", "Privacidade", "Engenharia Social"],
    datasets: [
      {
        label: "Progresso (%)",
        data: [80, 60, 90, 50],
        backgroundColor: "#0077cc",
      },
    ],
  };

  return (
    <div className="training-progress">
      <h3>Progresso de Treinamentos</h3>
      <Bar data={data} />
    </div>
  );
}

export default TrainingProgress;
