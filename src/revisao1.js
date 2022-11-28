// let e const
{
    var a = 1 //consigo acessar fora do bloco
    let b = 2  // não consigo acessar por fora do bloco
    console.log(b)
}
console.log(a)

//  Template String
const produto = 'IPad'
console.log(`${produto} é caro`)

// Desestruturing
const [l, e, ...tras] = "cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x, y)

const {idade, nome} = {nome: 'Ana', idade: 9}
console.log(nome, idade)
