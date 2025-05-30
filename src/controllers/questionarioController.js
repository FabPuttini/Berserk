var questionarioModel = require("../models/questionarioModel");

function cadastrarQuestionario(req, res) {
    var id_questionario = req.body.id_questionarioServer;
    var id_usuario = req.body.id_usuarioServer;
    var arco_favorito = req.body.arcoServer;
    var personagem_favorito = req.body.personagemServer;

    questionarioModel.cadastrarQuestionario(id_questionario, id_usuario, arco_favorito, personagem_favorito).then(function(resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado)
        }
        else {
            res.status(204).send("Nenhum resultado encontrado")
        }
    })
    
    .catch(function(erro){
        res.status(500).json(erro.sqlMessage);
        console.log(erro)
    })
}

module.exports = {
    cadastrarQuestionario
}