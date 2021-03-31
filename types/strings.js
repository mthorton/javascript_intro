// Single line comment
console.log("This is text, and a string")
/* Space between the start
of the comment and before the last.*/
// ctrl /: toggles on and off single line comments


//All of the ways you can create strings


let str_a = "This is a double quote string"
let str_b = 'This is a single quote string'

console.log('This is \nnew') // \n is a new line character

//Use this to add data into a string (This is a template string)
let str_c = `This is a backtick quote string`

//Just mentioning this, we will talk more later
let str_d = String(5)

let f_name = 'Justin'
let l_name = 'Ahmann'

// New op: unary operator that gives back type info
console.log(typeof f_name)
console.log(typeof "What type is this?")

let full_name = f_name + ' ' + l_name
let template_full = `${f_name} ${l_name}`
let concat_full = f_name.concat(l_name)

console.log(concat_full)

console.log(full_name)
console.log(template_full)

//These both print as one line strings
let multi_line1 = 'this is a long string' +
'and I want it on many lines'

let multi_line2 = 'this is also a long string \
and I want it on many lines'

console.log(multi_line1)
console.log(multi_line2)


let demo_str = "This is a demo"
let result = demo_str.slice(3)

console.log(result)

let indexed_str = "Hello world!"
console.log(indexed_str)
console.log(indexed_str[4])
