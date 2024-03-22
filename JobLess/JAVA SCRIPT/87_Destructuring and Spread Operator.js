/*
Destructuring assignment is used to unpack values from an array, or properties from objects, into distinct variables.
*/
let suppose = [1, 2]
let a = suppose[0];
let b = suppose[1];
console.log(a, b);

// Alternative of above code
let arr = [3, 5];
let [c, d, e] = arr;
console.log(c, d, e);  // e = undefined due to you havent save the data

// or
let arr1 = [1, 2, 3, 4, 5, 6];
let [x, y, z, ...rest] = arr1;
console.log(x, y, z, rest);
// o/p : 1 2 3 [ 4, 5, 6 ]

let [x1, , , ...remainingItems] = arr1;
console.log(x1, remainingItems);

// or
const obj = { a1: 1, b1: 2 }
const { a1, b1 } = obj;
console.log(a1, b1);


// Spread Syntax -------------------------------------------------
/*
Spread syntax allows an iterable such as an array or String to be expanded in places where zero or more arguments are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
*/
// Example 1
const arr2 = [1, 7, 11]
const obj1 = { ...arr2 };
console.log(obj1);
// o/p : {0:1,1:7,2:11}\

// Example 2
const sum = (v1, v2, v3) => {
    return v1 + v2 + v3;
}
const nums = [1, 2, 7];
console.log(sum(...nums))    // 10

// Example : 3
const object = {
    name: "Piyush",
    age: 22,
}
console.log({ ...object, name: "Sahil" }); // print object but change name to sahil
console.log({ name: "Sahil", age: 20, ...object }); // values dont override that is it will print an original object