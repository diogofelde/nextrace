// Simulao de usurios
const users = {
 admin: "1234",
 diogo: "senha123"
};

function login() {
 const user = document.getElementById("username").value;
 const pass = document.getElementById("password").value;
 const msg = document.getElementById("login-msg");

 if (users[user] && users[user] === pass) {
 localStorage.setItem("user", user);
 window.location.href = "dashboard.html";
 } else {
 msg.textContent = "Usurio ou senha invlidos.";
 msg.style.color = "red";
 }
}

// Painel
if (window.location.pathname.includes("dashboard.html")) {
 const user = localStorage.getItem("user");
 document.getElementById("welcome-msg").textContent = `Bem-vindo, ${user}!`;

 const logList = document.getElementById("log-list");
 const activityChart = document.getElementById("activityChart").getContext("2d");

 let logs = [
 { date: "2025-08-20", action: "Login realizado" },
 { date: "2025-08-21", action: "Restaurao iniciada" },
 { date: "2025-08-22", action: "Backup restaurado" },
 ];

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
 const counts = {};
 logs.forEach((log) => {
 counts[log.date] = (counts[log.date] || 0) + 1;
 });

 const labels = Object.keys(counts);
 const data = Object.values(counts);

 new Chart(activityChart, {
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
 y: { beginAtZero: true }
 }
 }
 });
 }

 renderLogs();
 updateChart();
}