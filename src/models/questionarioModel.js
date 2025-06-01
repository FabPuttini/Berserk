var database = require("../database/config")

function cadastrarQuestionario(id_usuario, arcoSelecionado, personagemSelecionado) {
    var instrucao = `
        INSERT INTO questionario (id_usuario, arco_favorito, personagem_favorito) VALUES ('${id_usuario}', '${arcoSelecionado}', '${personagemSelecionado}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarQuestionario
};