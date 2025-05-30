var database = require("../database/config")

function cadastrarRespostas(id_usuario, id_quiz, resultado) {
    var instrucao = `
        INSERT INTO usuario_quiz (id_usuario, id_quiz, resultado) VALUES ('${id_usuario}', '${id_quiz}', '${resultado}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarRespostas
};