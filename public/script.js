// Configurao Firebase
const firebaseConfig = {
 apiKey: "SUA_API_KEY",
 authDomain: "SEU_DOMINIO.firebaseapp.com",
 projectId: "SEU_PROJECT_ID",
 storageBucket: "SEU_BUCKET.appspot.com",
 messagingSenderId: "SEU_SENDER_ID",
 appId: "SEU_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Login
function login() {
 const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;

 auth.signInWithEmailAndPassword(email, password)
 .then(user => {
 window.location.href = "dashboard.html";
 })
 .catch(err => {
 document.getElementById("errorMsg").textContent = "Erro: " + err.message;
 });
}

// Dashboard
if (window.location.pathname.includes("dashboard.html")) {
 auth.onAuthStateChanged(user => {
 if (!user) return window.location.href = "index.html";

 db.collection("users").doc(user.uid).get().then(doc => {
 const data = doc.data();
 document.getElementById("userName").textContent = data.name;
 document.getElementById("progressFill").style.width = data.progress + "%";
 document.getElementById("progressFill").textContent = data.progress + "%";
 });
 });
}

function logout() {
 auth.signOut().then(() => {
 window.location.href = "index.html";
 });
}