const textoAnimadoFrases = [
    "Eu gostaria de te contar uma coisa",
    "Faz um tempo que eu queria te falar isso.",
    "Mas eu ainda não sei como falar isso pessoalmente.",
    "Então, resolvi fazer de uma forma que eu conheço muito bem.",
    "Faz um tempo desde que eu comecei a gostar de você.",
    "Eu sempre te achei inteligente.",
    "Porém, foi quando comecei a falar contigo.",
    "Que eu percebi que você era mais que isso.",
    "Além de inteligente, você consegue ser engraçada, bonita, divertida e outras milhões de qualidades.",
    "Então, eu gostaria de saber se você me daria essa chance."
];
const backgroundColors = []
let fraseAtual = 0
let letraAtual = 0
let acaoAtual = "digitando"
const h1 = document.getElementById("textoEmMudança")

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function changeBackgroundColor() {
    console.log("W.I.P")
}

async function textoAnimado() {
    const frase = textoAnimadoFrases[fraseAtual];
    const comprimento = frase.length;

    if (acaoAtual === "digitando") {
        h1.textContent = frase.substring(0, letraAtual + 1);
        letraAtual++;

        if (letraAtual === comprimento) {
            acaoAtual = "pausandoAntesDeApagar";
        }
        await delay(100);
    }

    else if (acaoAtual === "pausandoAntesDeApagar") {
        await delay(1000);
        acaoAtual = "apagando";
        letraAtual = comprimento;
    }

    else if (acaoAtual === "apagando") {
        h1.textContent = frase.substring(0, letraAtual - 1);
        letraAtual--;

        if (letraAtual === 0) {
            acaoAtual = "pausandoAntesDaProxima";
        }
        await delay(50);
    }

    else if (acaoAtual === "pausandoAntesDaProxima") {
        letraAtual = 0;
        acaoAtual = "digitando";
        fraseAtual++
        await delay(50);
    }
    textoAnimado()
}

textoAnimado()