// No exemplo dado, o primeiro parametro é o acumulador, é com base nele que serão processados os demais elementos

const numbers = [10, 8, 7, 6, 5, 6]

const sum = (total, el) => total + el
const total = numbers.reduce(sum)
console.log(total)

const notaFinal = (total, el) => total + el / 6
const media = numbers.reduce(notaFinal)
console.log(media)



// Exemplo feito pelo professor
const avg = (acc, el, i, array) => {
    if (i === array.length - 1) {
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}

const result = numbers.reduce(avg)
console.log(result)