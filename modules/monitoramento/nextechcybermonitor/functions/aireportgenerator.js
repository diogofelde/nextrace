exports.gerarRelatorioAI = functions.https.onRequest(async (req, res) => {
  const { dataInicio, dataFim } = req.body;
  const ataques = await admin.firestore().collection("ataques_global")
    .where("timestamp", ">=", new Date(dataInicio))
    .where("timestamp", "<=", new Date(dataFim))
    .get();

  const resumo = `Gere um relatório dos ${ataques.size} ataques entre ${dataInicio} e ${dataFim}, destacando os mais críticos.`;
  const respostaAI = await chamarGemini(resumo); // função que chama a API Gemini Developer

  res.send({ relatorio: respostaAI });
});
