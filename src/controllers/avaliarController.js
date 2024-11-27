var avaliarModel = require("../models/avaliarModel");


function avaliar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.id;
    var mensagem = req.body.mensagem;
    var sentimento = req.body.sentimento;
    var idJogo = req.body.idJogo

    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (mensagem == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (sentimento == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        avaliarModel.avaliar(id, mensagem, sentimento)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
    autenticar,
    cadastrar
}