async function textoAnimado() {
    for (i = 0; i <= 8; i++) {
        await delay(2000)
        h1.innerHTML = textoAnimadoFrases[i]
        console.log(textoAnimadoFrases[i])
    }
    if (textoAnimadoFrases[0] != "Eu gostaria de te contar uma coisa") {
        textoAnimadoFrases.unshift("Eu gostaria de te contar uma coisa")
    }
    await textoAnimado()
}