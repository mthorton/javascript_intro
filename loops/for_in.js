// For .. in Loop
/*
legend: 
    keyword = 'for'
    var = some temp word you use to refer to the current item
    collection = some collection you want to go through ex... Array or Obj or String

<keyword>(<variable> in <iterable>){
    // Do something
}
*/

let person = {
    name: "Max", 
    age: 30
}
console.log(person.name)
console.log(person["name"])

for (let property in person){
    console.log(property)
    console.log(person[property]) //A good use of a for in loop
}


let randomNums = [1, 9, 30, 11, 29, 53]
for (let rand in randomNums){
    console.log(rand)
    if (rand % 2 === 0){
        console.log(randomNums[rand])
    }
}

//Don't need the length property for this because the fullName variable can change
let fullName = "Maxwell Horton"
for (let letterID in fullName){
    console.log(letterID)
    console.log(fullName[letterID])

}



