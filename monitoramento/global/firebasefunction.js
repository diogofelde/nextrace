exports.coletarDadosShodan = functions.pubsub.schedule('every 5 minutes').onRun(async (context) => {
  const response = await axios.get('https://api.shodan.io/shodan/host/search?key=YOUR_KEY&query=attack');
  const dados = response.data.matches;
  dados.forEach(async (item) => {
    await admin.firestore().collection('ataques_global').add({
      tipo: item.tags[0],
      origem: item.location.country_name,
      destino: "Brasil",
      intensidade: item.isp,
      timestamp: admin.firestore.Timestamp.now(),
      fonte: "Shodan"
    });
  });
});
