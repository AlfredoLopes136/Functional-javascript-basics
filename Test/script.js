const Somar = (a) => a + 2

console.log(Somar(88))

const Somar2 = (a, b, c) => a - b + c / 2

console.log(Somar2(88, 33, 45))

function form0(n) {
    return function form(n2) {
        return function form2(n3) {
            return
        }
    }
}

function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }

}

const somaPotencia = potencia(2)
console.log(somaPotencia(8))


const resultadoP = potencia(2)(3)
console.log(resultadoP)

function tipo(a) {
    if (typeof a === "") {
        return true
    } else {
        return false
    }
}

const nome = tipo("eoo")
console.log(nome)

function potenciade2(a) {
    return function (b) {
        return Math.floor(a, b)
    }
}

const potenciaSoma = potenciade2(50)(3)
console.log(potenciaSoma)


function pontenciade2(n) {
    return function (b) {
        return Math.pow

    }

}

function potenciadedois(base) {
    return function (exp) {
        return Math.pow(base, exp)

    }

}


const soma = fn => fn + 2
console.log(soma(5))



function potCia(pr) {
    return function (pr2) {
        return Math.pow(pr, pr2)
    }
}
const calculo = potCia(3)
console.log(calculo(4)) 

function somar(a) {
    return function(b) {
        return function (c) {
            return a + b + c
            
        }
        
    }
    
}

const somarAb = somar(3)(4)
console.log(somarAb(2))