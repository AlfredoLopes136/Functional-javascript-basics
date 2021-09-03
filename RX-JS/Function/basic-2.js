function executarQualquerCoisa(fn) {
    return 3 + fn

}

console.log(executarQualquerCoisa)

function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)

    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

function somar(a) {
    return function somar2(b) {
        return function somar3(c) {
            return
        }
    }
}

const all = (somar(2)(somar2(3))(somar3(5)))
console.log(all)

const all23 = f => a + b
console.log(all23(23))
