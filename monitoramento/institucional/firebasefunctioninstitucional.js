exports.monitorarEndpoint = functions.pubsub.schedule('every 10 minutes').onRun(async (context) => {
  const response = await axios.get('https://api.uptimerobot.com/v2/getMonitors', {
    headers: { 'api-key': 'YOUR_UPTIMEROBOT_KEY' }
  });
  const status = response.data.monitors;
  status.forEach(async (monitor) => {
    if (monitor.status === 9) { // Down
      await admin.firestore().collection('ataques_institucional').add({
        empresa: "Órgão XYZ",
        tipo: "Queda de serviço",
        endpoint: monitor.friendly_name,
        risco: "Alto",
        timestamp: admin.firestore.Timestamp.now(),
        origem: "Monitoramento interno"
      });
    }
  });
});
