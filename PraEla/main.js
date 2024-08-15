const backgrounds = ['#FFCCCC', '#FF9999', '#FF6666', '#FF3333', '#FF0000'];
const texts = ['Você é', 'a mulher', 'mais LINDA', 'do mundo!', '❤'];
let currentIndex = 0;

function updateContent() {
    const backgroundColor = backgrounds[currentIndex];
    document.body.style.backgroundColor = backgroundColor;
    const animatedTextElement = document.querySelector('.animated-text');
    animatedTextElement.textContent = texts[currentIndex];
    animatedTextElement.style.backgroundColor = backgroundColor; // Define a cor de fundo do texto
    currentIndex = (currentIndex + 1) % backgrounds.length;
}

setInterval(updateContent, 750);
