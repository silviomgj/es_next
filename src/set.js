// não aceita repetição / não indexada
const times = new Set()
times.add('Vasco')
times.add('Plameiras').add('Corinthians').add('Santos')
times.add('São paulo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Vasco')
console.log(times.has('Vasco'))

const nomes = ['Raquel', 'Lucas', 'João', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
