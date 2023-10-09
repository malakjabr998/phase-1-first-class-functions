function ni(){
    console.log("not importent")
}
function receivesAFunction(ni){
ni()
}
function returnsANamedFunction(){
    function namedFunction (){
        console.log("named")
    }
    return namedFunction
}
function returnsAnAnonymousFunction(){
    return function (){
        console.log("anonymous")
    }
}