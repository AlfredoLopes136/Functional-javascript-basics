// retornar uma função a partir de uma função
// Curring

function finalPrice(tax) {
    return function (price) {
        return price * (1 + tax)

    }
}

const nycFinalPrice = finalPrice(0.0875)


console.log(nycFinalPrice(25.1))
console.log(nycFinalPrice(21.7))
console.log(nycFinalPrice(107.9))




function precoTenis(valor1) {
    return function (valor2) {
        return function(valor3) {
            return valor2 + valor1 + valor3    
        }
        
    }
    
}

console.log(precoTenis(24) (25) (33))

console.log(precoTenis(23) (34) (36))

