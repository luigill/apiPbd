const router = require('express-promise-router')();
const jogadoresLinhaController = require('../controllers/jogadoresLinha.controller');

// ==> Definindo as rotas do CRUD


router.post("/addJogadoresLinha", jogadoresLinhaController.createJogadoresLinha);

router.get("/jogadoresLinha", jogadoresLinhaController.listAllJogadoresLinha);

router.get("/jogadoresLinha/:id", jogadoresLinhaController.findJogadoresLinhaById);

router.put("/jogadoresLinha/:id", jogadoresLinhaController.updateJogadoresLinhaById);

router.delete("/jogadoresLinha/:id", jogadoresLinhaController.deleteJogadoresLinhaById);

module.exports = router;