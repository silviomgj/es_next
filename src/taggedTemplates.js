// Tagged Templates - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'outra string'
}

const aluno = 'João'
const situacao = 'Aprovado'
console.log(tag `${aluno} esta ${situacao}!`)
