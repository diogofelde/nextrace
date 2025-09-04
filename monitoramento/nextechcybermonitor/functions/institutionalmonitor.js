exports.institutionalMonitor = functions.pubsub.schedule("every 10 minutes").onRun(async () => {
  const response = await axios.post("https://api.uptimerobot.com/v2/getMonitors", {
    api_key: "YOUR_UPTIMEROBOT_KEY"
  });

  const monitores = response.data.monitors;
  for (const monitor of monitores) {
    if (monitor.status === 9) {
      await admin.firestore().collection("ataques_institucional").add({
        empresa: "Órgão XYZ",
        tipo: "Queda de serviço",
        endpoint: monitor.friendly_name,
        risco: "Alto",
        timestamp: admin.firestore.Timestamp.now(),
        origem: "Monitoramento interno"
      });
    }
  }
});
