// Simulao de banco de dados
const users = [
 { username: "diogo", password: "1234", name: "Diogo", progress: 40 }
];

// LOGIN
if (document.getElementById("loginForm")) {
 document.getElementById("loginForm").addEventListener("submit", (e) => {
 e.preventDefault();
 const user = document.getElementById("username").value;
 const pass = document.getElementById("password").value;
 const found = users.find(u => u.username === user && u.password === pass);

 if (found) {
 localStorage.setItem("user", JSON.stringify(found));
 window.location.href = "dashboard.html";
 } else {
 document.getElementById("loginError").textContent = "Usurio ou senha invlidos.";
 }
 });
}

// DASHBOARD
if (document.getElementById("userName")) {
 const user = JSON.parse(localStorage.getItem("user"));
 if (!user) window.location.href = "index.html";

 document.getElementById("userName").textContent = user.name;
 document.getElementById("progressFill").style.width = user.progress + "%";
 document.getElementById("progressFill").textContent = user.progress + "%";

 document.getElementById("logoutBtn").addEventListener("click", () => {
 localStorage.removeItem("user");
 window.location.href = "index.html";
 });

 // API Externa (exemplo com JSONPlaceholder)
 fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
 .then(res => res.json())
 .then(data => {
 const list = document.getElementById("newsList");
 data.forEach(item => {
 const li = document.createElement("li");
 li.textContent = item.title;
 list.appendChild(li);
 });
 });
}