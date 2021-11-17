const db = require("../config/database");

exports.createJogadores = async (req, res) => {
  const { cpf, codigoTime, numeroCamisa, tipoJogador } = req.body;
  const jogadorNew = await db.query(
    "INSERT INTO jogadores (cpf, codigoTime, numeroCamisa, tipoJogador) VALUES ($1, $2, $3, $4)",
    [cpf, codigoTime, numeroCamisa, tipoJogador]
  );

  res.status(201).send({
    message: "Jogador adicionado com sucesso!",
    body: {
      jogadores: { cpf, codigoTime, numeroCamisa, tipoJogador },
    },
  });
};

exports.listAllJogadores = async (req, res) => {
    const response = await db.query("SELECT * FROM jogadores");
    res.status(200).send(response.rows);
  };

  exports.findJogadoresById = async (req, res) => {
    const jogadoresId = parseInt(req.params.id);
    const response = await db.query(
      "SELECT * FROM jogadores WHERE cpf = $1", [jogadoresId]);
    res.status(200).send(response.rows);
  };



  
  exports.updateJogadoresById = async (req, res) => {
    const jogadorId = parseInt(req.params.id);
    const { cpf, codigoTime, numeroCamisa, tipoJogador } = req.body;
  
    const response = await db.query(
      "UPDATE jogador SET codigoTime = $2, numeroCamisa = $3, tipoJogador = $4 WHERE cpf = $1",
      [cpf, codigoTime, numeroCamisa, tipoJogador]
    );
  
    res
      .status(200)
      .send({ message: "Cadastro do jogador atualizado com sucesso!", jogadorId });
  };
  
  exports.deleteJogadoresById = async (req, res) => {
    const jogadorId = parseInt(req.params.id);
    await db.query("DELETE FROM jogadores WHERE cpf = $1",[
      jogadorId]);
  
    res
      .status(200)
      .send({ message: "Jogador removido com sucesso!", jogadorId });
  };