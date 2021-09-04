// arrow function
const bomDia = () => console.log("Olá amigos da rede Clobo")


bomDia()

const felizNatal = () => console.log('Feliz Natal')
felizNatal()


// Com a crase nós podemos interpolar com ${}
const saudacao = nome => `Fala ${nome}, blz?!?`
console.log(saudacao('Maria'))

const somar = (...numeros) => {
    console.log(typeof (numeros))
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}

console.log(somar(1, 2, 3, ))
console.log(somar(1, 2, 3, 4, 5))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8))

const somarN = fn => (a, b) => a + b + 2

console.log(somarN(2)(2, 3))

const potenciaDeDois = base => expo => Math.pow(base, expo)

console.log(potenciaDeDois(2)(10))

// this

Array.prototype.ult = function () {
    console.log(this[this.length - 1])

}
// Eu estou chamando a partir de num a função ult
const num = [1, 2, 3]
num.ult()

function somar2(f) {
    return function (j) {
        return f + j

    }

}

const somaAll = somar2(4)
console.log(somaAll(3))



function potenciacao(bas) {
    return function (ex) {
        return Math.pow(bas, ex)
    }
}

const all2 = potenciacao(2)
console.log(all2(2))

