
// for loop
// for (let i=0; i<=5; i++){
//     console.log("Iteration number: " +i)
// }

//while loop

// let i=0;

// while (i<3){
//     console.log("While loop Iteration number: "+ i)
//     i++;
// }

// do while

// let i=10;
// do{
//     console.log("This is First run: "+i);
//     i--;
// }while (i != 5)

//for in loop. iterate over an objects, object has key value pair

// let obj = {a: 1, b: 2, c: 3}
// for(let key in obj){
//     console.log("For in loop, going through key: " + key + " this is value inside "+obj[key])
// }

// for of loop, array has invisible index, starts from 0

// let arr = ['a', 'b', 'c']

// for (let value of arr){
//     console.log("For of loop, this is value "+value)
// }

// console.log(arr[1])
// console.log(obj['c'])


// nested for loop

let letters =['a','b','c']
let numbers = [1,2,3]

for(let i=0; i<letters.length;i++){
    for(let j=0; j<numbers.length; j++){
        console.log(`This is outer loop variable ${letters[i]} and this is inner loop variable ${numbers[j]}`)
    }
}

