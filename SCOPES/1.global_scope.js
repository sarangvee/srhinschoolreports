//Gobal scope

var globalVar = "I am a gloabl variable";
let globalLet = "I am a global let variable"
const globalConst = "I am a global const variable"

function showGlobal(){
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);
}

console.log("------Out side the function ------------")
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

console.log("------Inside the function ------------")

showGlobal();