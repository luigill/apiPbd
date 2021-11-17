const router = require('express-promise-router')();
const arbitroController = require('../controllers/arbitro.controller');

// ==> Definindo as rotas do CRUD


router.post("/addArbitro", arbitroController.createArbitro);

router.get("/arbitro", arbitroController.listAllArbitro);

router.get("/arbitro/:id", arbitroController.findArbitroById);

router.put("/arbitro/:id", arbitroController.updateArbitroById);

router.delete("/arbitro/:id", arbitroController.deleteArbitroById);

module.exports = router;