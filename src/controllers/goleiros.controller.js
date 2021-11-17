const db = require("../config/database");

exports.createGoleiros = async (req, res) => {
  const { cpf, codigoTime, golsSofridos } = req.body;
  const goleiroNew = await db.query(
    "INSERT INTO goleiro (cpf,codigoTime, golsSofridos) VALUES ($1, $2, $3)",
    [cpf, codigoTime, golsSofridos]
  );

  res.status(201).send({
    message: "Goleiro adicionado com sucesso!",
    body: {
      goleiros: { cpf, codigoTime, golsSofridos },
    },
  });
};


exports.listAllGoleiros = async (req, res) => {
    const response = await db.query("SELECT * FROM goleiros");
    res.status(200).send(response.rows);
  };

  exports.findGoleirosById = async (req, res) => {
    const goleirosId = parseInt(req.params.id);
    const response = await db.query(
      "SELECT * FROM goleiros WHERE cpf = $1", [goleirosId]);
    res.status(200).send(response.rows);
  };

  exports.updateGoleirosById = async (req, res) => {
    const goleiroId = parseInt(req.params.id);
    const { cpf, codigoTime, golsSofridos } = req.body;
  
    const response = await db.query(
      "UPDATE goleiros SET codigoTime = $2, golsSofridos = $3 WHERE cpf = $1",
      [cpf, codigoTime, golsSofridos]
    );
  
    res
      .status(200)
      .send({ message: "Cadastro do Goleiro atualizado com sucesso!", goleiroId });
  };
  
  exports.deleteGoleirosById = async (req, res) => {
    const goleiroId = parseInt(req.params.id);
    await db.query("DELETE FROM goleiros WHERE cpf = $1",[
      goleiroId]);
  
    res
      .status(200)
      .send({ message: "Goleiro removido com sucesso!", goleiroId });
  };