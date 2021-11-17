const router = require('express-promise-router')();
const organizamController = require('../controllers/organizam.controller');

// ==> Definindo as rotas do CRUD


router.post("/addOrganizam", organizamController.createOrganizam);

router.get("/organizam", organizamController.listAllOrganizam);

router.get("/organizam/:id", organizamController.findOrganizamById);

router.put("/organizam/:id", organizamController.updateOrganizamById);

router.delete("/organizam/:id", organizamController.deleteOrganizamById);

module.exports = router;