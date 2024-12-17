const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

if(sessionStorage.ID_USUARIO != undefined){
    login_e_cadastro.style.display = 'none';
    infoUsuario.style.display = 'inline';
    infoUsuario.innerHTML = `Ola, ${sessionStorage.USERNAME}`
}

// Função para calcular o deslocamento total com base no tamanho das imagens anteriores
function calculateOffset() {
    let offset = 0;
    for (let i = 0; i < index; i++) {
        offset += images[i].offsetWidth; // Soma a largura de cada imagem até o índice atual
    }
    return offset;
}

function updateCarousel() {
    const offset = calculateOffset();
    carouselImages.style.transform = `translateX(-${offset}px)`;
}

nextButton.addEventListener('click', () => {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0; // Volta ao início quando atinge o final
    }
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1; // Volta ao final quando está no início
    }
    updateCarousel();
});

async function nextCarousel(){
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0; // Volta ao início quando atinge o final
    }
    updateCarousel();
}

setInterval(nextCarousel, 5000)

// grid

document.querySelectorAll('.card').forEach(card => {
    const staticImg = card.querySelector('.static-img'); // Miniatura inicial
    const gifImg = card.querySelector('.gif-img'); // Elemento GIF
  
    card.addEventListener('mouseenter', () => {
      const gifUrl = card.getAttribute('data-gif');
      if (gifUrl) {
        gifImg.src = gifUrl; // Carrega o GIF
        gifImg.style.display = 'block'; // Mostra o GIF
        staticImg.style.display = 'none'; // Esconde a miniatura
      }
    });
  
    card.addEventListener('mouseleave', () => {
      gifImg.style.display = 'none';
      staticImg.style.display = 'block';
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const infoUsuario = document.getElementById("infoUsuario");
    const userMenu = document.getElementById("userMenu");



// Abre a pagina dos jogos dos grids
const darksouls3 = document.getElementById('darksouls3');
darksouls3.addEventListener('click', () => {
    window.open('darksouls3.html', '_self');
});
const devilmaycry5 = document.getElementById('devilmaycry5');
devilmaycry5.addEventListener('click', () =>{
    window.open('devilmaycry5.html', '_self');
});
const residentevil2 = document.getElementById('residentevil2');
residentevil2.addEventListener('click', () =>{
    window.open('residentevil2.html', '_self');
});
const guiltygear = document.getElementById('guiltygear');
guiltygear.addEventListener('click', () =>{
    window.open('guiltygear.html', '_self');
});
const doometernal = document.getElementById('doometernal');
doometernal.addEventListener('click', () =>{
    window.open('doometernal.html', '_self');
});
const hollowknight = document.getElementById('hollowknight');
hollowknight.addEventListener('click', () =>{
    window.open('hollowknight.html', '_self');
});


// NAVBAR SAIR
    infoUsuario.addEventListener("click", function (e) {
        e.preventDefault(); // Evita comportamento padrão do link
        const isMenuVisible = userMenu.style.display === "block";
        userMenu.style.display = isMenuVisible ? "none" : "block";
    });
    document.addEventListener("click", function (e) {
        if (!infoUsuario.contains(e.target) && !userMenu.contains(e.target)) {
            userMenu.style.display = "none";
        }
    });
});
const sairNav = document.getElementById('navSair');
    sairNav.addEventListener('click', () =>{
    sessionStorage.clear();
    window.open('index.html', '_self');
});

