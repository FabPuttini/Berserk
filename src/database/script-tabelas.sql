CREATE DATABASE Berserk;

USE Berserk;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE quiz (
	id_quiz INT PRIMARY KEY
);

CREATE TABLE usuario_quiz (
	id INT AUTO_INCREMENT,
	id_usuario INT,
	id_quiz INT,
	resultado INT,
    PRIMARY KEY (id),
	FOREIGN KEY (id_usuario) REFERENCES usuario(id),
	FOREIGN KEY (id_quiz) REFERENCES quiz(id_quiz)
);