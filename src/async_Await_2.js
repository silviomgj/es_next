function gerarNumeroEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1 
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número Repetido!')
        }else {
            resolve(aleatorio )
        }
    })
}

async function gerarMegaSena(qtdNumeros) {
    const  numeros = []
    for(let _ of Array(qtdNumeros).fill()) {
        numeros.push(await gerarNumeroEntre(1, 60, numeros))
    }
    return numeros 
} 
gerarMegaSena(7)
    .then(console.log)
    .catch(console.log)
