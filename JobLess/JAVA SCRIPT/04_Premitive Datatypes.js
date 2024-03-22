
/*
Primitive Data Types are a set of basic data types in JavaScript
These are 7 primitive datatypes in JavaScript:
Null
Number
String
Symbol
Undefined
Boolean
BigInt
(NNSSUBB)
*/
let a = null;
let b = 354;
let c = true;
let d = BigInt("567");
let e = "Piyush";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log("Output :\n", a, b, c, d, e, f, g);

//    How to check typeof item:
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);
console.log(g, typeof g);

// Objects : Object is a non-primitive datatype in JavaScript,they are like key value pair
const item = {
    "Piyush": true,
    "Age": 22,
    "Status": "Single",
}
console.log(item["Piyush"]);
console.log(item["Age"]);
console.log("If item not present :", item["NOTPRESENT"]);