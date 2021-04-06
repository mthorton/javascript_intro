// name(data) => data out
// f(x) = x * x // sqr function

/*
Way one:
<keyword> <yourName>(<what i need to work>){
    //What I do
    return <something>// what I want to give back
}
*/

// Two ways to write a function in js
function sqr(x){
    return x * x
}
console.log(sqr(5))


let aSqr = () => {
    return x * x // Explicit return
}
console.log(aSqr(5))


let bMult = (x, y) => x * y
let cSqr = x => x * x // Implicit return // can only do this for single arguments 

// labda, in other languages


function greet(){ // This needs no parameters to work 
    console.log("Hello World")
}
greet()

function betterGreet(fName){ // This is a one parameters function 
    console.log(`Hello ${fname}`)
}
betterGreet("Maxwell") // Passes in one argument


let createFullName = (fName, lName) => `${fName} ${lName}`

console.log(createFullName("Maxwell, Horton"))




