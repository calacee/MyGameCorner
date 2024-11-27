if(sessionStorage.ID_USUARIO != undefined){
    login_e_cadastro.style.display = 'none';
    infoUsuario.style.display = 'inline';
    infoUsuario.innerHTML = `Ola, ${sessionStorage.USERNAME}`
}



function publish(id_jogo){
    let radios = document.querySelector('input[name="toggle"]:checked')?.value;
    let mensagem = reviewText.value;

    if(!sessionStorage.ID_USUARIO){
        alert("Faça Login para postar uma análise")
        return;
    }
    var body = {
        id: sessionStorage.ID_USUARIO,
        mensagem: mensagem,
        sentimento: radios,
        idJogo: id_jogo
    }
    if(radios == undefined || mensagem == undefined){
      alert("Por favor preencha a mensagem e um sentimento!")
      return;
    }
    fetch("/avaliar/enviar",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }).then((res) => {
         // Redireciona para a página desejada se os dados estiverem corretos
        if(res.status != 200){
          throw new Error("Erro ao cadastrar")
        }
      }).catch((err) => {
        // mensagemErro.textContent = 'Login ou senha inválida.';
      });
}