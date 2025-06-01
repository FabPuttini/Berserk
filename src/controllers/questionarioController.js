var questionarioModel = require("../models/questionarioModel");

function cadastrarQuestionario(req, res) {
    var id_usuario = req.body.id_usuarioServer;
    var arcoSelecionado = req.body.arcoServer;
    var personagemSelecionado = req.body.personagemServer;

    questionarioModel.cadastrarQuestionario(id_usuario, arcoSelecionado, personagemSelecionado).then(function(resultado){
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