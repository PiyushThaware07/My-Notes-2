// ^ 1. Basic Type :
console.warn("(1)----------- Basic Type");
// a. boolean 
var isWorking = true;
// b. number : Represents both integer and floating-point numbers.
var num2 = 1000;
// c. string
var myname = "Piyush";
// d. Array : Represents an array of elements of a specific type.
var myarray = [1, 2, 3, 4, 5];
// e. Tuple : Represents an array with a fixed number of elements, where each element may be of a different type.
var mytuple = ["Sam", 2, "Rajput", 4, 2];
// f. Any : Represents a dynamic type where the variable can hold values of any type.
var mydata = 1000;
mydata = "Sam";
mydata = false;
// g. Null & Undifined : Used to represent null or undefined values, respectively
var nullValue = null;
var undefinedValue = undefined;
// ^ 2. Type Annotations : 
console.warn("(2)----------- Type Annotations");
// a. Variable Declarations:
var num1 = 1000;
var name1 = "Piyush";
var isActive = false;
console.log(num1, name1, isActive);
// b. Function Parameters and Return Types:
// Function with explicit return type void (no return value)
function addNumber(x, y) {
    console.log(x + y);
}
addNumber(10, 20);
// Function with type annotations for parameters and return type
function mulNumber(a, b) {
    return a * b;
}
var mynum = mulNumber(10, 5);
console.log(mynum);
// c. Object Type Annotations:
var person = {
    id: 10,
    fname: "Shreyash",
    lname: "Thaware",
    email: "shreyash@gmail.com"
};
console.log(person);
// d. Array Type Annotations:
var numbers1 = [1, 2, 3, 4, 5];
var names2 = ["Alice", "Bob", "Charlie"];
// e. Union Types : Union types in TypeScript allow you to declare a type that can hold values of multiple specified types. This means that a variable with a union type can store values of different types at different times, providing flexibility while maintaining type safety. Union types are denoted using the pipe (|) symbol between the types you want to combine.
var input;
input = 10;
console.log(input);
input = "my name is piyush";
console.log(input);
// ^ 3. Type aliases  : 
console.warn("(3)----------- Type Aliases ");
var mynum1 = 10;
console.log(mynum1);
var mynum2 = 10;
var mynum3 = "Sam";
var mynum4 = null;
console.log(mynum2, mynum3, mynum4);
var mynum5 = {
    id: 100,
    title: "something",
    description: "somewhere in northpole"
};
console.log(mynum5);
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
