const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");

admin.initializeApp();

exports.globalMonitor = functions.pubsub.schedule("every 5 minutes").onRun(async () => {
  const response = await axios.get("https://api.shodan.io/shodan/host/search?key=YOUR_KEY&query=attack");
  const ataques = response.data.matches;

  for (const ataque of ataques) {
    await admin.firestore().collection("ataques_global").add({
      tipo: ataque.tags[0] || "Desconhecido",
      origem: ataque.location.country_name,
      destino: "Brasil",
      intensidade: ataque.isp,
      timestamp: admin.firestore.Timestamp.now(),
      fonte: "Shodan"
    });
  }
});
