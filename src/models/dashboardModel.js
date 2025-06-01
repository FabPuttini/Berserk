var database = require("../database/config");

function buscarArcoFav() {
    var instrucaoSql = `
    SELECT arco_favorito 
    FROM questionario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPersonagemFav() {
    var instrucaoSql = `
    SELECT personagem_favorito 
    FROM questionario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarResultado() {
    var instrucaoSql = `
    SELECT resultado 
    FROM quiz;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarArcoFav,
    buscarPersonagemFav,
    buscarResultado
}