"use strict";
/*
// & BASIC
const a = "Sahil";
console.log(a);
const b =23;
console.log(b);


// & TYPESCRIPT DATATYPES
let a1 = 25;
a1 = "Piyush"
console.log(a1);

let b1 = "Sahil"
b1 = 5
console.log(b1);


// Explicity defining databtypes
// 1. Boolean
let isDone:boolean = false
// 2. String
let fname:string = "Piyush";
let lname:string;
lname = "Thaware"
console.log(fname,lname);
// 3. Number
let age:number = 23
console.log(age);
// 4. Array
let marks : number[] = [1, 2, 3, 4, 5];
console.log(marks);
// 5. Tuple
let submarks : [string,number] = ["Shreyash",23];
console.log(submarks,typeof(submarks));
// 6. Any: Represents a dynamic type that can hold values of any data type. Avoid using any whenever possible as it bypasses type checking.
let notSure : any = 4;
console.log(notSure);
notSure = "may be a string"
console.log(notSure);
// 7. Null and Undefined: Represents null and undefined values respectively. By default, null and undefined are subtypes of all other types.
let n: null = null;
let u: undefined = undefined;
console.log(n);
console.log(u);

// 8. Union Type : In TypeScript, a union type allows a variable to hold values of multiple specified types.
let myVar: number | string;
myVar = 10;
console.log(myVar);
myVar = "Piyush"
console.log(myVar);

const func = (n:any,m:string)=>{  // Parameter n implicitly has an type.
    console.log(n,m);
    return String(n*m)
}
const func1 = (n:number,m:number):number =>{
    return n*m;
}


// Alternative of above :
let num = <number>343;
console.log(num);



// & Type keyword
// 1. Basic Usage
type ID = number;
let userId: ID = 1001;

// 2. Union Type
type Username = string | number;
let fname: Username = "Piyush"
let age: Username = 23
console.log(fname, age);

// 3. Object Type
type UserDetails = {
    id: number,
    fullname: string,
    email: string
    isAdmin: boolean
}
let user1: UserDetails = {
    id: 1,
    fullname: "Piyush Thaware",
    email: "Piyush@gmail.com",
    isAdmin: true
}
console.log(user1);

// 4. Function Type
type userJob = (n: number, m: number) => number;
const func: userJob = (n, m) => {
    return n * m;
}


// & Array
// 1. Array Declaration :
// a. Using Type Annotations
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
console.log(numbers,names);
// b. Using Generic Array Type
let scores: Array<number> = [90, 85, 88, 92];
let mixedArray: Array<number | string> = [10, "hello", 20, "world"];
console.log(scores,mixedArray);


// 2. Accessing Array Elements
console.log(numbers[0]);
console.log(numbers[1]);

// 3. Array Type Assertions : If TypeScript cannot infer the array type correctly, you can use type assertions
let values: any[] = [1, "hello", true];
let mynumbers: number[] = values as number[];

// 4. Readonly Arrays: You can declare arrays as readonly to prevent modification after initialization.
let readOnlyNumbers: readonly number[] = [1, 2, 3];

// 5. Iteration Over An Array
// a. Using For loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// b. using for each loop
let names1: string[] = ["Alice", "Bob", "Charlie"];
names1.forEach(name => {
    console.log(name);
});

// 6. Array Tupple
const arr:[number,string,number] = [2,"Piyush",55]
console.log(arr);
*/
// OUTPUT : 
// type User2 = {
//     name?: string | undefined;
//     email?: string | undefined;
// }
// 2. Required<Type> : opposite of partial
const User3 = {
    name: "Piyush",
    email: "Piyush@gmail.com"
}; // name and email are required.
console.log(User3);
var user = {
    name: "Sam",
    email: "Sam@gmail.com"
};
console.log(user);
const fruitDetails = {
    apple: { color: 'red', taste: 'sweet' },
    banana: { color: 'yellow', taste: 'creamy' },
    orange: { color: 'orange', taste: 'tangy' },
};
console.log(fruitDetails.apple.color); // Output: "red"
console.log(fruitDetails.banana.taste); // Output: "creamy"
console.log(fruitDetails.orange.color); // Output: "orange"
// 10. Parameters <Type>
const myFunc4 = (a, b) => {
    console.log(a + b);
};
// 11. ConstructorParameters<Type>
class SampleClass {
    constructor(s, p) {
        this.s = s;
        this.p = p;
    }
}
// 12. ReturnType<type>
const myfunc = (a, b) => {
    // console.log(a + b);
    return a + b;
};
// 13. InstanceType<type>
class SampleClass1 {
    constructor(s, p) {
        this.s = s;
        this.p = p;
    }
}
const user3 = {
    s: "Piyush",
    p: "SPD"
};
// ^ GENERICS : Generics in TypeScript allow you to create reusable components and functions that can work with a variety of data types while maintaining type safety. They enable you to write code that is more flexible and can operate on different data structures without sacrificing type checking.
// a. Generic With Functions
function myFunction1(n) {
    return n;
}
const ans1 = myFunction1(20);
const ans2 = myFunction1("Piyush");
const ans3 = myFunction1(null);
console.log(ans1, ans2, ans3); // when we dont know the exact return data type so the generic is used to address that problem
// Above Code Using Generic
function myFunction2(n) {
    return n;
}
const ans4 = myFunction2(20);
console.log(ans4);
const myDetails = {
    name: "Sam Rajput",
    age: 23
};
const ans5 = myFunction2(myDetails);
console.log(ans5);
// OR To Call a Function with specifc type like i have passed a string
const ans6 = myFunction2(myDetails);
console.log(ans6);
// Example 2 :
const ans7 = myFunction2("Herik Sevak");
console.log(ans7);
// Multiple custom type in generic
function fun(n, m) {
    return { n, m };
}
const ans8 = fun(1, "Piyush");
console.log(ans8);
// Extends keyword with generic
function fun1(n, m) {
    return { n, m };
}
const ans9 = fun1(1, 8);
console.log(ans9);
// b. Generic With Array
// Without generic
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
// With Generic
const arr2 = [1, 2, 3, 5, 3, 2];
console.log(arr2);
// c. Generic With Classes
class Container {
    constructor(value) {
        this.value = value;
    }
}
let numberContainer = new Container(10);
console.log(numberContainer.value); // Output: 10
let stringContainer = new Container("hello");
console.log(stringContainer.value); // Output: "hello"
let pair = { first: 1, second: "two" };
console.log(pair.first); // Output: 1
console.log(pair.second); // Output: "two"
