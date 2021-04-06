// Hoisting

const add2 = (x, y) => { // Arrow functions don't get hoisted 
    return x + y
}

console.log(add2(2, 5), adder(2, 5)) // This works because of hoisting

function adder (x, y){ // Functions can be defined after the call
    return x + y
}







