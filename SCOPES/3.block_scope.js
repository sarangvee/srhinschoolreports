function blockScope(){
    let functionScopedVar="I am accessiable within this function";
    if (true){
        const blockedScopeVar= "I am accessiable within this block";
        console.log(blockedScopeVar);
    }
    //console.log(blockedScopeVar);
    console.log(functionScopedVar);
}
blockScope();