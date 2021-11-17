const router = require('express-promise-router')();
const goleirosController = require('../controllers/goleiros.controller');

// ==> Definindo as rotas do CRUD


router.post("/addGoleiros", goleirosController.createGoleiros);

router.get("/goleiros", goleirosController.listAllGoleiros);

router.get("/goleiros/:id", goleirosController.findGoleirosById);

router.put("/goleiros/:id", goleirosController.updateGoleirosById);

router.delete("/goleiros/:id", goleirosController.deleteGoleirosById);

module.exports = router;