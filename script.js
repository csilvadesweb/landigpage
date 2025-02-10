// script.js

// Efeito de rolagem suave para os links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Animação de entrada nos elementos da página
const elementos = document.querySelectorAll('section, .avaliacao');

elementos.forEach(elemento => {
    elemento.style.opacity = 0;
    elemento.style.transform = 'translateY(20px)';

    let delay = 0;
    if (elemento.classList.contains('avaliacao')) {
        delay = 200;
    }

    setTimeout(() => {
        elemento.style.opacity = 1;
        elemento.style.transform = 'translateY(0)';
        elemento.style.transition = 'opacity 0.5s, transform 0.5s';
    }, delay);
});


// Slider de fotos da estrutura do estacionamento
const estrutura = document.getElementById('estrutura');
const fotos = [
    'foto1.jpg',
    'foto2.jpg',
    'foto3.jpg'
];

let currentFoto = 0;

const slider = document.createElement('div');
slider.classList.add('slider');

fotos.forEach(foto => {
    const img = document.createElement('img');
    img.src = foto;
    img.alt = 'Foto do estacionamento'; // Adicione um atributo alt para acessibilidade
    slider.appendChild(img);
});

estrutura.insertBefore(slider, estrutura.querySelector('p'));

setInterval(() => {
    currentFoto++;
    if (currentFoto >= fotos.length) {
        currentFoto = 0;
    }

    slider.style.transform = translateX(-${currentFoto * 100}%);
    slider.style.transition = 'transform 0.5s';
}, 3000);

// Calculadora de preços
function calcular() {
    var dias = document.getElementById("dias").value;
    var precoDiaria = 30; // Preço por dia
    var total = dias * precoDiaria;
    document.getElementById("total").innerHTML = total.toFixed(2);
}
