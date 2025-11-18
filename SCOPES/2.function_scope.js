//var var_test="I am a vartest"

function functionScopeEg(){

    var functionScopevar = "Access within function"
    if (true){
         var var_test="I am a var test";
         let let_test="I am a let";
         console.log(let_test);
    }
    console.log(functionScopevar);
    console.log(var_test);
    //console.log(let_test)
    
}

functionScopeEg()
console.log("-----------Tets outside function-----------");
//console.log(let_test);