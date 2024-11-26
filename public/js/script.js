const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

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
      gifImg.style.display = 'none'; // Esconde o GIF
      staticImg.style.display = 'block'; // Mostra novamente a miniatura
    });
  });

// Seleciona o botão pelo ID
const darksouls3 = document.getElementById('darksouls3');

// Adiciona o event listener ao botão
darksouls3.addEventListener('click', () => {
    // Abre uma nova janela
    window.open('darksouls3.html');
});
