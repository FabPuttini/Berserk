var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/buscarArcoFav", function (req, res) {
    dashboardController.buscarArcoFav(req, res);
});

router.get("/buscarPersonagemFav", function (req, res) {
    dashboardController.buscarPersonagemFav(req, res);
});

router.get("/buscarResultado", function (req, res) {
    dashboardController.buscarResultado(req, res);
});

module.exports = router;