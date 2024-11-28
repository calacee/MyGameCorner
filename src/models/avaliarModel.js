var database = require("../database/config")

function avaliar(id, mensagem, sentimento, fkJogo) {
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO analises (fkUsuario, mensagem, sentimento, fkJogo) VALUES (${id}, '${mensagem}', ${sentimento}, ${fkJogo});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function puxar(fkJogo){
    var instrucaoSql = `
    SELECT a.sentimento, a.mensagem, u.username from analises a join usuario u on a.fkUsuario = u.idUsuario where fkJogo = ${fkJogo};
`;
    return database.executar(instrucaoSql);
}

function grafico(fkJogo){
    var instrucaoSql = ` SELECT 
    DATE(createdAt) AS createdAt,
    COUNT(CASE WHEN sentimento = 1 THEN 1 END) AS contagem_true,
    COUNT(CASE WHEN sentimento = 0 THEN 1 END) AS contagem_false
FROM 
    analises
WHERE
	fkJogo = ${fkJogo}
GROUP BY 
    DATE(createdAt)
ORDER BY 
    DATE(createdAt);
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    avaliar,
    puxar,
    grafico
};