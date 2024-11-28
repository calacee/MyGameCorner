CREATE DATABASE MyGameCorner;

USE MyGameCorner;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(30) UNIQUE,
	email VARCHAR(50),
	senha VARCHAR(20)
);

CREATE TABLE jogos(
	idJogo INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(30)
);

CREATE TABLE analises(
	idAnalise INT PRIMARY KEY AUTO_INCREMENT,
	sentimento BOOLEAN,
	mensagem TEXT,
	fkJogo INT,
	fkUsuario INT,
	createdAt DATETIME DEFAULT current_timestamp(),
	FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario),
	FOREIGN KEY(fkJogo) REFERENCES jogos(idJogo)
);

INSERT INTO jogos Values(
	1,
	"Dark Souls 3"
),
(
	2,
	"Devil May Cry 5"
),
(
	3,
	"Resident Evil 2"
),
(
	4,
	"Guilty Gear -Strive-"
),
(
	5,
	"Doom Eternal"
),
(
	6,
	"Hollow Knight"
);