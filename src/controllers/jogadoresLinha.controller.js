const db = require("../config/database");

exports.createJogadoresLinha = async (req, res) => {
  const { cpf, codigoTime, posicao, golsFeitos } = req.body;
  const jogadorLinhaNew = await db.query(
    "INSERT INTO jogadoresLinha (cpf, codigoTime, posicao, golsFeitos) VALUES ($1, $2, $3, $4)",
    [cpf, codigoTime, posicao, golsFeitos]
  );

  res.status(201).send({
    message: "Jogador adicionado com sucesso!",
    body: {
      jogadoresLinha: { cpf, codigoTime, posicao, golsFeitos },
    },
  });
};


exports.listAllJogadoresLinha = async (req, res) => {
    const response = await db.query("SELECT * FROM jogadoresLinha");
    res.status(200).send(response.rows);
  };

  exports.findJogadoresLinhaById = async (req, res) => {
    const jogadoresLinhaId = parseInt(req.params.id);
    const response = await db.query(
      "SELECT * FROM jogadoresLinha WHERE cpf = $1", [jogadoresLinhaId]);
    res.status(200).send(response.rows);
  };





exports.updateJogadoresLinhaById = async (req, res) => {
  const jogadorLinhaId = parseInt(req.params.id);
  const { cpf, codigoTime, posicao, golsFeitos } = req.body;

  const response = await db.query(
    "UPDATE jogadoresLinha SET codigoTime = $2, posicao = $3, golsFeitos = $4 WHERE cpf = $1",
    [cpf, codigoTime, posicao, golsFeitos]
  );

  res
    .status(200)
    .send({ message: "Cadastro do jogador atualizado com sucesso!", jogadorLinhaId });
};

exports.deleteJogadoresLinhaById = async (req, res) => {
  const jogadorLinhaId = parseInt(req.params.id);
  await db.query("DELETE FROM jogadoresLinha WHERE cpf = $1",[
    jogadorLinhaId]);

  res
    .status(200)
    .send({ message: "Jogador removido com sucesso!", jogadorLinhaId });
};