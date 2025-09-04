export default function Card({ title, value }) {
  return (
    <div className="bg-white shadow rounded p-4 w-full">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const data = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Tentativas de Ataque',
        data: [12, 19, 3, 5, 2, 3, 9],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Atividade de Segurança - Últimos 7 dias',
      },
    },
  };

  return (
    <div className="bg-white shadow rounded p-4 mt-6">
      <Line options={options} data={data} />
    </div>
  );
}
import Card from '../components/Card';
import Chart from '../components/Chart';

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Usuários Ativos" value="1.245" />
        <Card title="Alertas de Segurança" value="32" />
        <Card title="Status do Sistema" value="100%" />
      </div>
      <Chart />
    </div>
  );
}
