// ^ 01. DATATYPES :
console.warn("Datatypes -------------------(1)");
// a. String
let fname1: string = "Piyush";
let lname1: string = "Thaware";
console.log(fname1, typeof (fname1));
console.log(lname1, typeof (lname1));

// b. Boolean
let isAdmin: boolean;
isAdmin = false;
console.log(isAdmin, typeof (isAdmin));
isAdmin = true;
console.log(isAdmin, typeof (isAdmin));

// c. Number
let num1: number = 10;
console.log(num1, typeof (num1));
num1 = 0xf00d;
console.log(num1, typeof (num1));

// d. Array
let array1: number[];
array1 = [1, 2, 3, 4, 5];
console.log(array1, typeof (array1));

// e. Tuple
let tuple1: [string, number, boolean, number];
tuple1 = ["Piyush", 100, false, 50.00];
console.log(tuple1, typeof (tuple1));

// f. null
let myvar1: null = null;
console.log(myvar1);

// g. undefined
let myvar2: undefined = undefined;
console.log(myvar2);

// h. any
let myvar3: any;
myvar3 = "Piyush";
console.log(myvar3);
myvar3 = false;
console.log(myvar3);
myvar3 = 5000;
console.log(myvar3);

// i. union
let myvar4: string | number | null;
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
function myfun1(n: any, m: any) { console.log(n, m) }
myfun1(5, 6);

// b. Set arguments dynamically. : Its return type is void that means null
function myfun2(n: string, m: number) { console.log(n + m) }
myfun2("Nine", 9);
// Now It return type is number 
function myfun3(n: number, m: number) { return n * m }
console.log(myfun3(8, 6));
// Now setting the return type : the below code will return number as default 
function myfun4(n: number, m: number): number {
    return n + m;
}
console.log(myfun4(4, 6));



// ^ 03. TYPE KEYWORD :
console.warn("Types Keyword -------------------(3)");
// a. Basic Usage
type fname2 = string;
type lname2 = string;
type age = number;
let userFname: fname2 = "Shreyash";
let userLname: lname2 = "Thaware";
console.log(userFname, userLname);
// OR 
let fname3: string = "Sam";
console.log(fname3);
// b. Union Type 
type variable = string | number | undefined;
let var1: variable = 24;
let var2: variable = "SAM JOE";
let var3: variable = undefined;
console.log(var1, var2, var3);
// c. Object Type
type obj1 = {
    userId: number,
    userFname: string,
    userLname: string
}
let myobj1: obj1 = {
    userId: 1,
    userFname: "Ronak",
    userLname: "Sharma",
}
console.log(myobj1);
// d. Function Type
type myfunc4 = (n: number, m: number) => number;
// const myFuncGreet: myfunc4 = (n, m) => {
//     return n * m;
// }
// console.log(myFuncGreet(12,6));
// OR
function myFuncGreet(n: number, m: number): number {
    return n + m;
}
console.log(myFuncGreet(12, 6));



// ^ 04. Array :
console.warn("Array -------------------(4)");
// a. Array declaration using type annotations.
let array2: number[];
array2 = [1, 2, 3, 3, 2, 1];
console.log(array2);
// b. Array declaration using generic annotations.
let array3: Array<number>;
array3 = [1, 2, 5, 8, 6];
console.log(array3);
let array4: Array<Number | string>;
array4 = [1, 4, 6, 8, "Piyush", "sam", 45];
console.log(array4);
// c. ReadOnly Array
let readOnlyNumbers: readonly number[] = [1, 2, 3];
console.log(readOnlyNumbers);
// d.Iteration Over an array
let array5 = [1, 3, 5, 7, 8];
for (let i = 0; i < array5.length - 1; i++) {
    console.log(i,array5[i]);
}
array5.forEach((item) => {
    console.log(item);
})

