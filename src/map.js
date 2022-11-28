const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.get('angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'função'],
    [{}, 'objeto'],
    [123, 'numero'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)
