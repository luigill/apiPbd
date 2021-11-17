const db = require("../config/database");

exports.createTimes = async (req, res) => {
  const { codigoTime, codigoLiga, nomeTime, numVitorias, capGinasio, enderecoGinasio } = req.body;
  const timeNew = await db.query(
    "INSERT INTO times (codigoTime, codigoLiga, nomeTime, numVitorias, capGinasio, enderecoGinasio) VALUES ($1, $2, $3, $4, $5, $6)",
    [codigoTime, codigoLiga, nomeTime, numVitorias, capGinasio, enderecoGinasio]
  );

  res.status(201).send({
    message: "Time adicionado com sucesso!",
    body: {
      times: { codigoTime, codigoLiga, nomeTime, numVitorias, capGinasio, enderecoGinasio },
    },
  });
};

exports.listAllTimes = async (req, res) => {
    const response = await db.query("SELECT * FROM times");
    res.status(200).send(response.rows);
  };

  exports.findTimesById = async (req, res) => {
    const timesId = parseInt(req.params.id);
    const response = await db.query(
      "SELECT * FROM times WHERE codigoTime = $1", [timesId]);
    res.status(200).send(response.rows);
  };

exports.updateTimesById = async (req, res) => {
  const timeId = parseInt(req.params.id);
  const { codigoTime, numVitorias } = req.body;

  const response = await db.query(
    "UPDATE times SET numVitorias = $2 WHERE codigoTime = $1",
    [codigoTime, numVitorias]
  );

  res
    .status(200)
    .send({ message: "Cadastro do time atualizado com sucesso!", timeId });
};

exports.deleteTimesById = async (req, res) => {
  const timeId = parseInt(req.params.id);
  await db.query("DELETE FROM times WHERE codigoTime = $1",[
    timeId]);

  res
    .status(200)
    .send({ message: "Time removido com sucesso!", timeId });
};