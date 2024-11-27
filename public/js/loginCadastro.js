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
         // Redireciona para a página desejada se os dados estiverem corretos
        if(res.status != 200){
          throw new Error("Erro ao cadastrar")
        }
        // window.location.href = 'dashboard/dashboard.html'
      }).catch((err) => {
        // Exibe uma mensagem de erro se o login falhar
        // mensagemErro.textContent = 'Login ou senha inválida.';
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
        // alert('Login ou senha inválida.', err);
        console.log("erro", err)
    });
}