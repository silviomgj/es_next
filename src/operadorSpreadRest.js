// Operador ...Rest (juntar) / Spread (espalhar)
// Usar Rest com parametro de função

// Usar Spread com objeto
const funcionario = {nome: 'Maria', salario: 12000.00}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// Usar Spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafael']
console.log(grupoFinal)
