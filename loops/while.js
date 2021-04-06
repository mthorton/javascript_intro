//While Loop
/*
legend:
    keyword = while
    1 = some eval or expression that is true or false

<keyword>(1) {
    Do something
}
*/

let i = 0 
while (i <= 10){
    console.log(i)
    i++
    ++i
}

//This preforms the same thing as the while loop above
for (let x = 0; x <= 10; x++){
    for (let y = 0; y <= 10; y++){
        console.log(x, y, x * y)
    }
}

while(true){
    console.log("Help this loop is always true")
    break
}


let names = ["Justin", "Adam", "Kate", "Jim", "Amy"]
for (let name in names){
    let curName = names[name]
    console.log(curName)
    if (curName == "Kate") break
}



// Break / Continue 
let counter = 0
while (counter <= 20){
    if (counter % 2 === 0){
        counter++
        continue
    }
    console.log(counter)
    counter++
}

let tmp = 100
while (tmp >= 0){
    console.log(tmp)
    tmp = tmp - 5
}

