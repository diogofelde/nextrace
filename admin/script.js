const logList = document.getElementById("log-list");
const activityChartCtx = document.getElementById("activityChart").getContext("2d");

let logs = [
  { date: "2025-08-20", action: "Restauração iniciada" },
  { date: "2025-08-21", action: "Restauração concluída" },
  { date: "2025-08-22", action: "Backup restaurado" },
  { date: "2025-08-22", action: "Verificação de integridade" },
  { date: "2025-08-23", action: "Restauração iniciada" },
];

let chartInstance = null;

function renderLogs() {
  logList.innerHTML = "";
  logs.forEach((log) => {
    const li = document.createElement("li");
    li.textContent = `${log.date} - ${log.action}`;
    logList.appendChild(li);
  });
}

function exportLog() {
  const blob = new Blob([JSON.stringify(logs, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "log_NexTrace.json";
  a.click();
  URL.revokeObjectURL(url);
}

function clearLog() {
  logs = [];
  renderLogs();
  updateChart();
}

function updateChart() {
  const counts = logs.reduce((acc, log) => {
    acc[log.date] = (acc[log.date] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(counts);
  const data = Object.values(counts);

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(activityChartCtx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Atividades",
        data,
        backgroundColor: "#00bcd4"
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Inicialização
renderLogs();
updateChart();