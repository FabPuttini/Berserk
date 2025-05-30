CREATE DATABASE Berserk;

USE Berserk;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE questionario (
	id_quesitonario INT,
    id_usuario INT,
    arco_favorito VARCHAR(30),
    personagem_favorito VARCHAR(20),
    PRIMARY KEY (id_questionario),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE quiz (
	id_quiz INT,
	id_usuario INT,
	resultado INT,
    PRIMARY KEY (id_quiz),
	FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE questionario_quiz (
	id_questionario INT,
    id_quiz INT,
    id_usuario INT,
    PRIMARY KEY (id_questionario, id_quiz),
    FOREIGN KEY (id_questionario) REFERENCES questionario(id_quesitonario),
    FOREIGN KEY (id_quiz) REFERENCES quiz(id_quiz),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);
