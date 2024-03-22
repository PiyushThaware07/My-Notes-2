/*
Hoisting refers to the process whereby the interpreter appears to move the declarations to the top of the code before executions.
*/
var b = 1000;
console.log("Working",a,b);
myFunc("Piyush");
function myFunc(name){
    console.log(`my name is ${name}`);
}


// JavaScript only hoists declarations, not initializations. The variable will be undefined until the line where its initialized is reached.
var a = 10;

// JS host functions and class definations to the top as well but initialize a variable is not supported