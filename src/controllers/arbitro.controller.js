const db = require("../config/database");

exports.createArbitro = async (req, res) => {
  const { cpfArbitro, nomeCompleto, telefone } = req.body;
  const arbitroNew = await db.query(
    "INSERT INTO arbitro (cpfArbitro,nomeCompleto,telefone) VALUES ($1, $2, $3)",
    [cpfArbitro, nomeCompleto, telefone]
  );

  res.status(201).send({
    message: "Arbitro adicionado com sucesso!",
    body: {
      arbitro: { cpfArbitro, nomeCompleto, telefone },
    },
  });
};

exports.listAllArbitro = async (req, res) => {
  const response = await db.query("SELECT * FROM arbitro");
  res.status(200).send(response.rows);
};

exports.findArbitroById = async (req, res) => {
  const arbitroId = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM arbitro WHERE cpfArbitro = $1", [arbitroId]);
  res.status(200).send(response.rows);
};

exports.updateArbitroById = async (req, res) => {
  const arbitroId = parseInt(req.params.id);
  const { cpfArbitro, nomeCompleto, telefone } = req.body;

  const response = await db.query(
    "UPDATE arbitro SET nomeCompleto = $1, telefone = $2 WHERE cpfArbitro = $1",
    [cpfArbitro, nomeCompleto, telefone]
  );

  res
    .status(200)
    .send({ message: "Cadastro do 'arbitro realizado com sucesso!", arbitroId });
};

exports.deleteArbitroById = async (req, res) => {
  const arbitroId = parseInt(req.params.id);
  await db.query("DELETE FROM arbitro WHERE cpfArbitro = $1",[
    arbitroId]);

  res
    .status(200)
    .send({ message: "Arbitro removido com sucesso!", arbitroId });
};