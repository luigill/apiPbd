const db = require("../config/database");

exports.createPartidas = async (req, res) => {
  const { codigoPartida, timeCasa, cpfArbitro,timeFora, timeVencedor } = req.body;
  const partidaNew = await db.query(
    "INSERT INTO partidas (codigoPartida, timeCasa, cpfArbitro,timeFora, timeVencedor) VALUES ($1, $2, $3, $4, $5)",
    [codigoPartida, timeCasa, cpfArbitro,timeFora, timeVencedor]
  );

  res.status(201).send({
    message: "Partida adicionada com sucesso!",
    body: {
      partidas: { codigoPartida, timeCasa, cpfArbitro,timeFora, timeVencedor },
    },
  });
};

exports.listAllPartidas = async (req, res) => {
    const response = await db.query("SELECT * FROM partidas");
    res.status(200).send(response.rows);
  };

exports.findPartidasById = async (req, res) => {
    const partidasId = parseInt(req.params.id);
    const response = await db.query(
      "SELECT * FROM partidas WHERE codigoPartida = $1", [partidasId]);
    res.status(200).send(response.rows);
  };

exports.deletePartidasById = async (req, res) => {
  const partidaId = parseInt(req.params.id);
  await db.query("DELETE FROM partidas WHERE codigoPartida = $1",[
    partidaId]);

  res
    .status(200)
    .send({ message: "Partida removida com sucesso!", partidaId });
};