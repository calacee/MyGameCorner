CREATE DATABASE MyGameCorner;

USE MyGameCorner;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(20) UNIQUE,
	email VARCHAR(30),
	senha VARCHAR(20)
);

CREATE TABLE jogos(
	idJogo INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(20)
);

CREATE TABLE analises(
	idAnalise INT PRIMARY KEY AUTO_INCREMENT,
	sentimento BOOLEAN,
	mensagem TEXT,
	fkJogo INT,
	FOREIGN KEY(fkJogo) REFERENCES jogos(idJogo)
);