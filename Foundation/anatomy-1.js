// Function declaration

function sayHello() {
    console.log('Hello')
}

sayHello() 

function sayHelloTo (name) {
    //console.log('Hello ' + name)
    console.log(`Hello ${name}!`)

}

sayHelloTo('Mike')

function returnHi () {
    return 'Hi!'
}

let greeting = returnHi()
console.log(greeting)

function returnHiTo(name) {
    return `Hi ${name}!`
}

console.log(returnHiTo('Alfredo'))

function sayHello(name) {
    console.log(`Hello ${name}!`)
    
}

sayHello('Mike')