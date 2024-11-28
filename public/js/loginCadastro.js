const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

loginBtn.addEventListener("click", () => {
    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
});

registerBtn.addEventListener("click", () => {
    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
});

function register(){
  
  var username = rgstrUsername.value;
  var email = rgstrEmail.value;
  var senha = rgstrPassword.value;
  var arrobaIndex = email.indexOf("@");
  var pontoIndex = email.indexOf(".");

  if(arrobaIndex === -1 ||
    pontoIndex === -1 ||
    arrobaIndex <= 0 ||
    pontoIndex >= email.length - 1
    ){
      alert("Insira um email válido!");
      return;
    }
  if(username.length < 3){
    alert("Nome de Usuário muito curto!");
    return;
  }
  if(senha.length < 8){
    alert("Insira uma senha com no mínimo 8 caracteres!")
  }
    var body = {
        username: rgstrUsername.value,
        email: rgstrEmail.value,
        password: rgstrPassword.value
    }
    fetch("/usuarios/cadastrar",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }).then((res) => {
        if(res.status != 200){
          throw new Error("Erro ao cadastrar")
        }
      }).catch((err) => {
      });
}

function login(){
    console.log("login")
    var username =  lgnUsername.value;
    var password =  lgnPassword.value;
    
    fetch("/usuarios/autenticar",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
      }).then((res) => {
         // Redireciona para a página desejada se os dados estiverem corretos
        if(res.status != 200){
          throw new Error("Erro ao logar")
        }

        return res.json()
        // console.log(res)
      }).then((data) => {
        sessionStorage.ID_USUARIO = data.id
        sessionStorage.USERNAME = data.username
        window.location.href = '../index.html'   
        console.log(data)
      }).catch((err) => {
        // Exibe uma mensagem de erro se o login falhar
        // mensagemErro.textContent = 'Login ou senha inválida.';
        alert('Login ou senha inválida.');
    });
}