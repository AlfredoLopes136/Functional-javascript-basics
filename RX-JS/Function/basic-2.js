function executarQualquerCoisa(fn) {
    return 3 + fn

}

console.log(executarQualquerCoisa)

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)

    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))