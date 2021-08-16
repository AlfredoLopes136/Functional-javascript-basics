/* Usando a função map para transformar um elemento em outro elemento(lembrando que o tamanho do array
    continua o mesmo, apenas os elementos do conjunto são alterados). */

const numbers = [1, 2, 3, 4, 5, 6]

// const numbersV2 = numbers.map(el => * 2)
const numbersV2 = numbers.map(function (el) {
    return el * 2

})

console.log(numbersV2)

const students = [{
        name: 'Jake',
        score: 6.4
    },
    {
        name: 'Susan',
        score: 8.6
    },
    {
        name: 'Emma',
        score: 9.4
    },
    {
        name: 'Peter',
        score: 8.1
    }

]

const getScore = el => el.score

const result = students.map(getScore).map(Math.ceil)

console.log("Result:", result)