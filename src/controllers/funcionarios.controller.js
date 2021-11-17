const db = require("../config/database");

exports.createFuncionarios = async (req, res) => {
  const { cpf, codigoTime, idade, nomeCompleto, tipoFuncao } = req.body;
  const funcionariosNew = await db.query(
    "INSERT INTO funcionarios (cpf, codigoTime, idade, nomeCompleto, tipoFuncao) VALUES ($1, $2, $3, $4, $5)",
    [cpf, codigoTime, idade, nomeCompleto, tipoFuncao]
  );

  res.status(201).send({
    message: "Funcionario adicionado com sucesso!",
    body: {
      funcionarios: { cpf, codigoTime, idade, nomeCompleto, tipoFuncao },
    },
  });
};


exports.listAllFuncionarios = async (req, res) => {
    const response = await db.query("SELECT * FROM funcionarios");
    res.status(200).send(response.rows);
  };

  exports.findFuncionariosById = async (req, res) => {
    const funcionariosId = parseInt(req.params.id);
    const response = await db.query(
      "SELECT * FROM funcionarios WHERE cpf = $1", [funcionariosId]);
    res.status(200).send(response.rows);
  };

  exports.updateFuncionariosById = async (req, res) => {
    const funcionarioId = parseInt(req.params.id);
    const { cpf, codigoTime, idade, nomeCompleto, tipoFuncao } = req.body;
  
    const response = await db.query(
      "UPDATE funcionarios SET codigoTime = $2, idade = $3, nomeCompleto = $4, tipoFuncao = $5 WHERE cpf = $1",
      [cpf, codigoTime, idade, nomeCompleto, tipoFuncao]
    );
  
    res
      .status(200)
      .send({ message: "Cadastro do funcionario atualizado com sucesso!", funcionarioId });
  };
  
  exports.deleteFuncionariosById = async (req, res) => {
    const funcionarioId = parseInt(req.params.id);
    await db.query("DELETE FROM funcionarios WHERE cpf = $1",[
      funcionarioId]);
  
    res
      .status(200)
      .send({ message: "Funcionarios removido com sucesso!", funcionarioId });
  };