const router = require('express-promise-router')();
const jogadoresController = require('../controllers/jogadores.controller');

// ==> Definindo as rotas do CRUD


router.post("/addJogadores", jogadoresController.createJogadores);

router.get("/jogadores", jogadoresController.listAllJogadores);

router.get("/jogadores/:id", jogadoresController.findJogadoresById);

router.put("/jogadores/:id", jogadoresController.updateJogadoresById);

router.delete("/jogadores/:id", jogadoresController.deleteJogadoresById);

module.exports = router;