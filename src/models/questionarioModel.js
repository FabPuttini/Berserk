var database = require("../database/config")

function cadastrarQuestionario(id_questionario, id_usuario, arco_favorito, personagem_favorito) {
    var instrucao = `
        INSERT INTO quiz (id_questionario, id_usuario, arco_favorito, personagem_favorito) VALUES ('${id_questionario}', '${id_usuario}', '${arco_favorito}', '${personagem_favorito}');
        INSERT INTO questionario_quiz (id_questionario) VALUES ('${id_questionario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarQuestionario
};