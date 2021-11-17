const router = require('express-promise-router')();
const organizadoresController = require('../controllers/organizadores.controller');

// ==> Definindo as rotas do CRUD


router.post("/addOrganizadores", organizadoresController.createOrganizadores);

router.get("/organizadores", organizadoresController.listAllOrganizadores);

router.get("/organizadores/:id", organizadoresController.findOrganizadoresById);

router.put("/organizadores/:id", organizadoresController.updateOrganizadoresById);

router.delete("/organizadores/:id", organizadoresController.deleteOrganizadoresById);

module.exports = router;