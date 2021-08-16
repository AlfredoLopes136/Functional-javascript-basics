    /*
     * Function that operate on other function,
     * either by taking them as arguments or by 
     * returning them, are called higher order function.
     */

    // Passando uma função como parametro para outra função
    // Mecanica das funções em jJS
    
    function run(fn) {
        return `Result: ${fn()}`
    }

    function sayHello() {
        console.log("Hi my name is Alfredo")

    }

    run(sayHello)


    run(function () {
        console.log("run!")

    })

    const result = run(Math.random)

    console.log(result)