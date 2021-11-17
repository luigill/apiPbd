const router = require('express-promise-router')();
const partidasController = require('../controllers/partidas.controller');

// ==> Definindo as rotas do CRUD


router.post("/addPartidas", partidasController.createPartidas);

router.get("/partidas", partidasController.listAllPartidas);

router.get("/partidas/:id", partidasController.findPartidasById);

router.delete("/partidas/:id", partidasController.deletePartidasById);

module.exports = router;