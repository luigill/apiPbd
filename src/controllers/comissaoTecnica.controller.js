const db = require("../config/database");

exports.createComissaoTecnica = async (req, res) => {
  const { cpf, codigoTime } = req.body;
  const ComissaoTecnicaNew = await db.query(
    "INSERT INTO ComissaoTecnica (cpf,codigoTime) VALUES ($1, $2)",
    [cpf, codigoTime]
  );

  res.status(201).send({
    message: "Comissao Tecnica adicionado com sucesso!",
    body: {
      ComissaoTecnica: { cpf, codigoTime },
    },
  });
};

exports.listAllComissaoTecnica = async (req, res) => {
    const response = await db.query("SELECT * FROM comissaoTecnica");
    res.status(200).send(response.rows);
  };

  exports.findComissaoTecnicaById = async (req, res) => {
    const comissaoId = parseInt(req.params.id);
    const response = await db.query(
      "SELECT * FROM comissaoTecnica WHERE cpf = $1", [comissaoId]);
    res.status(200).send(response.rows);
  };

 
  exports.updateComissaoTecnicaById = async (req, res) => {
    const comissaoId = parseInt(req.params.id);
    const { cpf, codigoTime } = req.body;
  
    const response = await db.query(
      "UPDATE comissaoTecnica SET codigoTime = $2 WHERE cpf = $1",
      [cpf, codigoTime]
    );
  
    res
      .status(200)
      .send({ message: "Cadastro da comissao atualizado com sucesso!", comissaoId });
  };
  
  exports.deleteComissaoTecnicaById = async (req, res) => {
    const comissaoId = parseInt(req.params.id);
    await db.query("DELETE FROM comissaoTecnica WHERE cpf = $1",[
      comissaoId]);
  
    res
      .status(200)
      .send({ message: "Comissao removida com sucesso!", comissaoId });
  };