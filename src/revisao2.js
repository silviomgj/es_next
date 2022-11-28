// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 4))

// Arrow Function (this)
const lexico1 = () => console.log(this === module.exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametro Default
function log(texto = 'node') {
    console.log(texto)
}
log()
log('eu sou mais forte')

// Operando Rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total (1, 2, 13, 4))
