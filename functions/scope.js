// Let Const Var .... others
let x = 5 // Will expose the variable to its scope and any sub-scope 
const favNum = 42 // const can't be reassigned 
//favNum = 50

var z = 10 // For now, these are =
y = 5 // and should I say =ly bad
//^^^^^Don't do it either of these ways. 

x = 9 // x is being reassigned <- this is fine


// Scope
if (true){
    let x = 8
    console.log(x) // This will print the x within the code block(8)
}
console.log(x)

for (let i = 0; i < 10; i++){ // using, let i, instead of, i, disposes of 
    //the variable after the loop
    console.log(i)
}
console.log(i) // This doesn't work if the for loop is initialized as let 
//i, instead of i

// Functions are almost always declared with const