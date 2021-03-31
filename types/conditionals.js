// Conditional statements 

/*
Conditionals are used to execute a piece of code if a 
condition is true. They allow out code to make decisions 
and carry out actions based on those decisions. 
*/

// -If statements
// -Switches
// -Ternaries

// If statements

mathResult = 2 + 2 === 4
console.log(mathResult)

if (mathResult) console.log('This equates to true')

// Block Body + Else

if(mathResult){
    console.log('This equates to true')
}else{
    console.log('This equates to false')
}

// Chaining if/else statements
// else ifs allows us to provide a new condition to test 
//if the condition above are not met. 


// Order matters, the greater condition should be at the top
let tempF = 97

if (tempF > 95){
    console.log("It's hot!")
}else if (tempF > 50){
    console.log("It's warm!")
}else if (tempF > 32){
    console.log("It's chilly")
}else if (tempF <= 32){
    console.log("It's freezing")
}else{
    console.log("I can not provide the weather")
}

// Testing multiple conditions 

let myName = 'Max'
let age = 30

if (myName === 'Max'){
    console.log('Name Logged')
}else if (age === 30){
    console.log('Age Logged')
}else if (myName === 'Max' && age === 30){
    console.log('Name & Age Logged')
}

// Switches
// Run a block of code based on different cases

let tempF = 72

switch (true){
    case tempF > 95:
        console.log("It's hot")
        break
    case tempF > 50:
        console.log("It's warm")
        break
    case tempF > 32:
        console.log("It's chilly")
        break
    case tempF <= 32:
        console.log("It's freezing")
        break
    default:
        console.log("I can not provide the weather")
}

let dog = 'Lab'
let dogLower = dog.toLowerCase()

switch(dog){
    case 'husky':
        console.log("Husky")
        break
    case 'lab':
        console.log("Lab")
        break
    case 'shepherd':
        console.log("Shepherd")
        break
}

 let firstName = "Justin"

 switch (firstName){
     case 'Justin':
     case 'Amit':
         console.log("They are an instructor")
         break
    default: console.log("They are a student")
 }

 // Ternaries
 // Condition ? True || False

 let lightSwitch = true

 lightSwitch ? console.log("Lights are on") : console.log("Lights are off")


 tempF > 95 ? console.log("It's hot") 
 : tempF > 50 ? console.log("It's warm") 
 : tempF > 32 ? console.log("It's chilly") 
 : tempF <= 32 ? console.log("It's freezing") 
 : console.log("I cannot provide the weather")


