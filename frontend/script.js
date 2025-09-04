// LOGIN
if (document.getElementById("loginForm")) {
 document.getElementById("loginForm").addEventListener("submit", async (e) => {
 e.preventDefault();
 const username = document.getElementById("username").value;
 const password = document.getElementById("password").value;

 const res = await fetch("http://localhost:5000/api/auth/login", {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({ username, password })
 });

 if (res.ok) {
 const user = await res.json();
 localStorage.setItem("user", JSON.stringify(user));
 window.location.href = "dashboard.html";
 } else {
 alert("Login invlido");
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
}