const db = require("../config/database");

exports.createLiga = async (req, res) => {
    const { codigoLiga, local} = req.body;
    const newLiga = await db.query(
      "INSERT INTO liga(codigoLiga,local) VALUES($1, $2)",
      [codigoLiga, local]
    );
  
    res.status(201).send({
      message: "Liga adicionada com sucesso!",
      body: {
        organizadores: { codigoLiga, local},
      },
    });
  };


exports.listAllLiga = async (req, res) => {
    const response = await db.query("SELECT * FROM liga");
        res.status(200).send(response.rows);
  };

  
exports.findLigaById = async (req, res) => {
    const ligaId = parseInt(req.params.id);
    const response = await db.query(
      "SELECT * FROM liga WHERE codigoLiga = $1",
      [ligaId]
    );
    res.status(200).send(response.rows);
  };

  exports.updateLigaById = async (req, res) => {
    const ligaId = parseInt(req.params.id);
    const { codigoLiga, local } = req.body;
  
    const response = await db.query(
      "UPDATE liga SET local = $2 WHERE codigoLiga = $1",
      [codigoLiga, local]
    );
  
    res.status(200).send({ message: "Liga Atualizada com Sucesso!" });
  };
  
  exports.deleteLigaById = async (req, res) => {
    const ligaID = parseInt(req.params.id);
    await db.query("DELETE FROM liga WHERE codigoLiga = $1", [ligaID]);
  
    res.status(200).send({ message: "Liga deletada com sucesso!", ligaID });
  };