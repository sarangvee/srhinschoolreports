
import dog from './10.js_dog.json' assert{type:'json'}

//console.log(dog)


//COnver JSON object to a string
let dog_string=JSON.stringify(dog);

console.log(dog_string)

// Covert JSON string to object

let dog_object = JSON.parse(dog_string)

console.log(dog_object)