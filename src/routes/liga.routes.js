const router = require('express-promise-router')();
const ligaController = require('../controllers/liga.controller');

// ==> Definindo as rotas do CRUD


router.post("/addLiga", ligaController.createLiga);

router.get("/liga", ligaController.listAllLiga);

router.get("/liga/:id", ligaController.findLigaById);

router.put("/liga/:id", ligaController.updateLigaById);

router.delete("/liga/:id", ligaController.deleteLigaById);

module.exports = router;