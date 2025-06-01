var dashboardModel = require("../models/dashboardModel");

function buscarArcoFav(req, res) {

    dashboardModel.buscarArcoFav().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o arco favorito.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPersonagemFav(req, res) {

    dashboardModel.buscarPersonagemFav().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o personagem favorito.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarResultado(req, res) {

    dashboardModel.buscarResultado().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o resultado do quiz.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarArcoFav,
    buscarPersonagemFav,
    buscarResultado
}