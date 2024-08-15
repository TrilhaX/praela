// main.js

const backgrounds = ['#FFCCCC', '#FF9999', '#FF6666', '#FF3333', '#FF0000'];
const texts = ['Você é', 'a mulher', 'mais fofa', 'do mundo!', '❤'];
let currentIndex = 0;

function updateContent() {
    document.body.style.backgroundColor = backgrounds[currentIndex];
    document.querySelector('.animated-text').textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % backgrounds.length;
}

setInterval(updateContent, 750);