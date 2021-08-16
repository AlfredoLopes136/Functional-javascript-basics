// Function expression

const increment1 = function (n) {
    return n + 1
    
}

// Arrow function is always anonymous 

const increment2 = (n) => {
    return n + 1
}

console.log(increment1(3))
console.log(increment2(4))

// forma mais enxuta de criar uma função
const increment3 = n => n + 1

console.log(increment3(199))

// Quando tem dois parametros

const sum = (a, b) => a + b
console.log(sum(3, 8))