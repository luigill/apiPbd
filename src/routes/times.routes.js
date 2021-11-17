const router = require('express-promise-router')();
const timesController = require('../controllers/times.controller');

// ==> Definindo as rotas do CRUD


router.post("/addTimes", timesController.createTimes);

router.get("/times", timesController.listAllTimes);

router.get("/times/:id", timesController.findTimesById);

router.put("/times/:id", timesController.updateTimesById);

router.delete("/times/:id", timesController.deleteTimesById);

module.exports = router;