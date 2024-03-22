"use strict";
// ^ 01. DATATYPES :
console.warn("Datatypes -------------------(1)");
// a. String
let fname1 = "Piyush";
let lname1 = "Thaware";
console.log(fname1, typeof (fname1));
console.log(lname1, typeof (lname1));
// b. Boolean
let isAdmin;
isAdmin = false;
console.log(isAdmin, typeof (isAdmin));
isAdmin = true;
console.log(isAdmin, typeof (isAdmin));
// c. Number
let num1 = 10;
console.log(num1, typeof (num1));
num1 = 0xf00d;
console.log(num1, typeof (num1));
// d. Array
let array1;
array1 = [1, 2, 3, 4, 5];
console.log(array1, typeof (array1));
// e. Tuple
let tuple1;
tuple1 = ["Piyush", 100, false, 50.00];
console.log(tuple1, typeof (tuple1));
// f. null
let myvar1 = null;
console.log(myvar1);
// g. undefined
let myvar2 = undefined;
console.log(myvar2);
// h. any
let myvar3;
myvar3 = "Piyush";
console.log(myvar3);
myvar3 = false;
console.log(myvar3);
myvar3 = 5000;
console.log(myvar3);
// i. union
let myvar4;
myvar4 = "sam";
console.log(myvar4);
myvar4 = 50003;
console.log(myvar4);
myvar4 = null;
console.log(myvar4);
// ERROR :
// myvar4 = undefined; 
// console.log(myvar4);
// ^ 02. FUNCTION RETURN TYPES :
console.warn("Function Return Types -------------------(2)");
// a. Basic Usage : return void
function myfun1(n, m) { console.log(n, m); }
myfun1(5, 6);
// b. Set arguments dynamically. : Its return type is void that means null
function myfun2(n, m) { console.log(n + m); }
myfun2("Nine", 9);
// Now It return type is number 
function myfun3(n, m) { return n * m; }
console.log(myfun3(8, 6));
// Now setting the return type : the below code will return number as default 
function myfun4(n, m) {
    return n + m;
}
console.log(myfun4(4, 6));
// ^ 03. TYPE KEYWORD :
console.warn("Types Keyword -------------------(3)");
let userFname = "Shreyash";
let userLname = "Thaware";
console.log(userFname, userLname);
// OR 
let fname3 = "Sam";
console.log(fname3);
let var1 = 24;
let var2 = "SAM JOE";
let var3 = undefined;
console.log(var1, var2, var3);
let myobj1 = {
    userId: 1,
    userFname: "Ronak",
    userLname: "Sharma",
};
console.log(myobj1);
// const myFuncGreet: myfunc4 = (n, m) => {
//     return n * m;
// }
// console.log(myFuncGreet(12,6));
// OR
function myFuncGreet(n, m) {
    return n + m;
}
console.log(myFuncGreet(12, 6));
// ^ 04. Array :
console.warn("Array -------------------(4)");
// a. Array declaration using type annotations.
let array2;
array2 = [1, 2, 3, 3, 2, 1];
console.log(array2);
// b. Array declaration using generic annotations.
let array3;
array3 = [1, 2, 5, 8, 6];
console.log(array3);
let array4;
array4 = [1, 4, 6, 8, "Piyush", "sam", 45];
console.log(array4);
// c. ReadOnly Array
let readOnlyNumbers = [1, 2, 3];
console.log(readOnlyNumbers);
// d.Iteration Over an array
let array5 = [1, 3, 5, 7, 8];
for (let i = 0; i < array5.length - 1; i++) {
    console.log(i, array5[i]);
}
array5.forEach((item) => {
    console.log(item);
});
