/*
JS has three types of scopes:
1. Block scope
2. Function scope
3. Global scope
*/


// Var : It has global scope
{
    var a = 10;
}
console.log(a);

// Let : It has bloack level scope
{
    let b = 10;
}
console.log(b);

// Function Scope
let global = 1000
function myFunc(){
    console.log(global);
    let local = 500;
    console.log(local);
}
console.log(global);
myFunc()
console.log(local);