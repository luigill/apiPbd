const db = require("../config/database");

exports.createOrganizadores = async (req, res) => {
  const { codOrg, name, fone } = req.body;
  const organizadoresNew = await db.query(
    "INSERT INTO organizadores (codigoOrg,nome,telefone) VALUES ($1, $2, $3)",
    [codOrg, name, fone]
  );

  res.status(201).send({
    message: "Organizador adicionado com sucesso!",
    body: {
      organizadores: { codigoOrg, nome, telefone}
    },
  });
};

exports.listAllOrganizadores = async (req, res) => {
  const response = await db.query("SELECT * FROM organizadores");
  res.status(200).send(response.rows);
};

exports.findOrganizadoresById = async (req, res) => {
  const organizadorId = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM organizadores WHERE codigoOrg = $1",
    [organizadorId]
  );
  res.status(200).send(response.rows);
};

exports.updateOrganizadoresById = async (req, res) => {
  const organizadorId = parseInt(req.params.id);
  const { codigoOrg, name, fone } = req.body;

  const response = await db.query(
    "UPDATE organizadores SET nome = $2, telefone = $3 WHERE codigoOrg = $1",
    [codigoOrg, name, fone]
  );

  res
    .status(200)
    .send({ message: "Organizador atualizado!", codigoOrg });
};

exports.deleteOrganizadoresById = async (req, res) => {
  const organizadorId = parseInt(req.params.id);
  await db.query("DELETE FROM organizadores WHERE codigoOrg = $1", [
    organizadorId
  ]);

  res
    .status(200)
    .send({ message: "Organizador deletado com sucesso!", codigoOrg });
};