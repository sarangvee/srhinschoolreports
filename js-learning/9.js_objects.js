// create objects, a dog    

 
// access dogs name using dot notation
console.log("The dog's name is: " + dog.name)

// access dogs name using bracket notation
console.log("The dog's age is: "+dog['age'])

//modify existing property
dog.age=6

console.log("The dog's new age is: "+dog['age'])

// add new property 
dog.isTrained=true
console.log("Is the dog is Trained? "+dog.isTrained)

//call the method
dog.speak()