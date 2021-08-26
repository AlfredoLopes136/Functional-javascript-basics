console.log("Test!")


// Function declaration
function bomDia() {
    console.log("Bom Dia!")
}

bomDia()

// Function expression
const boaTarde = function () {
    console.log('Boa Tarde!')
}

boaTarde()

// Flexibilidade dos parametros
// Eu posso atribuir um valor como padrão para um parametro

function somar(a, b = 0) {
    return a + b
}

let resultado = somar(3, 6, 6, 7, 8, 89, )
console.log(resultado)

// Os tres paradigmas com javascript
// Orientada a objetos
// Procedural
// Funcional