var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/questionarioController.js");

router.post("/cadastrarQuestionario/", function (req, res) {
    // função a ser chamada quando acessar /questionario/cadastrarQuestionario
    questionarioController.cadastrarQuestionario(req, res);
});

module.exports = router;