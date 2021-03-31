// What is a boolean?
// They are either true/false

/*
x = 5; Never do this 
var x = 5; Don't do this either
let x = 5; When you might change the value
const x = 5; When you want te value to stay the same
*/

//creating a new variable (2 steps)
//1) Declaration
let y

//2) Initialization / variable assignment
y = 5 

// How can we make booleans?
let = Boolean(5) // Function that turns something to a boolean 

x = Boolean(0) // Reassignment
console.log(x)

let z = false // 
z = true
console.log(typeof z)

let result = 5 > 4
console.log(result)

/*
== checks for equality
>=
>
<=
<

&& returns true if both a and b are true
|| returns true if either a or b are true

*/
let flippedBool = !true
console.log(flippedBool)

// Truthy // Falsey
// Truthy 'test', [1, 2], { test:5 }, 1
let testResult = Boolean([1, 2])
console.log(testResult)

//Falsey 0, "", {}, null, undefined, NaN
let falseyTest = Boolean(0)
// If you try and turn an empty [], {} you get back true
console.log(falseyTest)


// Why are they useful?



// Bonus
let boolConv = !!("teststring") // This is just for exposure
console.log(boolConv)

