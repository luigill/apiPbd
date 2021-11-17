const router = require('express-promise-router')();
const comissaoTecnicaController = require('../controllers/comissaoTecnica.controller');

// ==> Definindo as rotas do CRUD


router.post("/addComissaoTecnica", comissaoTecnicaController.createComissaoTecnica);

router.get("/comissaoTecnica", comissaoTecnicaController.listAllComissaoTecnica);

router.get("/comissaoTecnica/:id", comissaoTecnicaController.findComissaoTecnicaById);

router.put("/comissaoTecnica/:id", comissaoTecnicaController.updateComissaoTecnicaById);

router.delete("/comissaoTecnica/:id", comissaoTecnicaController.deleteComissaoTecnicaById);

module.exports = router;