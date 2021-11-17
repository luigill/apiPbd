const db = require("../config/database");

exports.createOrganizam = async (req, res) => {
  const { codigoOrg, codigoLiga } = req.body;
  const organizamNew = await db.query(
    "INSERT INTO organizam (codigoOrg, codigoLiga) VALUES ($1, $2)",
    [codigoOrg,codigoLiga]
  );

  res.status(201).send({
    message: "Organizacao adicionada com sucesso!",
    body: {
      organizam: { codigoOrg,codigoLiga },
    },
  });
};


exports.listAllOrganizam = async (req, res) => {
    const response = await db.query("SELECT * FROM organizam");
    res.status(200).send(response.rows);
  };

  exports.findOrganizamById = async (req, res) => {
    const organizamId = parseInt(req.params.id);
    const response = await db.query(
      "SELECT * FROM organizam WHERE codigoLiga = $1", [organizamId]);
    res.status(200).send(response.rows);
  };

  
  
  exports.updateOrganizamById = async (req, res) => {
    const organizamId = parseInt(req.params.id);
    const { codigoOrg, codigoLiga } = req.body;
  
    const response = await db.query(
      "UPDATE organizam SET codigoOrg = $1 WHERE codigoLiga = $2",
      [codigoOrg,codigoLiga]
    );
  
    res
      .status(200)
      .send({ message: "Cadastro da organizao atualizada com sucesso!", organizamId });
  };
  
  exports.deleteOrganizamById = async (req, res) => {
    const organizamId = parseInt(req.params.id);
    await db.query("DELETE FROM organizam WHERE codigoLiga = $1",[
      organizamId]);
  
    res
      .status(200)
      .send({ message: "Liga removida com sucesso!", organizamId });
  };