var database = require("../database/config")

function avaliar(id, mensagem, sentimento, fkJogo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", id, mensagem, sentimento, fkJogo);
    let sentimento_bd = sentimento == true ? 1 : 0
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO analises (fkUsuario, mensagem, sentimento, fkJogo) VALUES (${id}, '${mensagem}', ${sentimento_bd}, ${fkJogo});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    avaliar
};