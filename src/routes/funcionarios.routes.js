const router = require('express-promise-router')();
const funcionariosController = require('../controllers/funcionarios.controller');

// ==> Definindo as rotas do CRUD


router.post("/addFuncionarios", funcionariosController.createFuncionarios);

router.get("/funcionarios", funcionariosController.listAllFuncionarios);

router.get("/funcionarios/:id", funcionariosController.findFuncionariosById);

router.put("/funcionarios/:id", funcionariosController.updateFuncionariosById);

router.delete("/funcionarios/:id", funcionariosController.deleteFuncionariosById);

module.exports = router;