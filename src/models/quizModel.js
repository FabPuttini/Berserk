var database = require("../database/config")

function cadastrarRespostas(id_quiz, id_usuario, resultado) {
    var instrucao = `
        INSERT INTO quiz (id_quiz, id_usuario, resultado) VALUES ('${id_quiz}', '${id_usuario}', '${resultado}');
        INSERT INTO questionario_quiz (id_quiz) VALUES ('${id_quiz}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarRespostas
};