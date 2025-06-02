const textoAnimadoFrases = ["Faz um tempo que queria te falar isso", "a", "b"]

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function textoAnimado(){
    for (i = 0; i <= 2; i++){
        console.log(textoAnimadoFrases[i])
        await delay(2000)
    }
}

textoAnimado()