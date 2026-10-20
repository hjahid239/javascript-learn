// javascript data types
// primitives: string, number, boolean, null, undefined, symbol

let stringExample = "Zahid Hasan"
let numberExample = 6740
let booleanExample = true
let nullExample = null
let undefinedExample = undefined
let symbolExample = Symbol("description")
console.table([typeof stringExample, typeof numberExample, typeof booleanExample, typeof nullExample, typeof undefinedExample, typeof symbolExample])

// typeof string = "string"
// typeof number = "number"
// typeof boolean = "boolean"
// typeof null = "object" // this is a known bug in JavaScript
// typeof undefined = "undefined"
// typeof symbol = "symbol"



// non-primitives: object, array, function


const objectExample = {
    name: "Zahid Hasan",
    age: 20,
    isStudent: true
}
const arrayExample = [1, 2, 3, 4, 5]
const functionExample = function() {
    return "Hello World"
}
console.table([typeof objectExample, typeof arrayExample, typeof functionExample])

// typeof object = "object"
// typeof array = "object" // this is a known bug in JavaScript
// typeof function = "function"
// 