-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE Berserk;

USE Berserk;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE quiz (
	id_usuario INT,
	pergunta_1 INT,
	pergunta_2 INT,
	pergunta_3 INT,
	pergunta_4 INT,
	pergunta_5 INT,
	pergunta_6 INT,
	pergunta_7 INT,
	pergunta_8 INT,
	pergunta_9 INT,
	pergunta_10 INT,
	PRIMARY KEY (id_usuario),
	FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);