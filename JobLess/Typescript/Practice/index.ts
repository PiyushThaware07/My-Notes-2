// ^ 1. DATATYPE :
console.warn("(1) Datatypes =======================");
// a. boolean
let isDone: boolean = false;
console.log("a.boolean : ", isDone, typeof (isDone));
// b.  number
let mynum: number;
mynum = 10
console.log("b.number : ", mynum, typeof (mynum));
// c. string
let mystring: string = "Piyush";
console.log("c.string : ", mystring, typeof (mystring));
// d. Array
let myarray: number[] = [1, 2, 3, 4, 5];
console.log("d.array : ", myarray, typeof (myarray));
// e. Tuple: Represents an array with a fixed number of elements where each element may be of a different type.
let mytuple: [string, number] = ["Piyush", 1000]
console.log("e.tuple : ", myarray, typeof (mytuple));
// f. any : Represents any type, allowing you to opt out of type checking.
let myvar: any = 10;
console.log("f.any : ", myvar, typeof (myvar));
// g. null 
let myvar2: null = null;
console.log("f.null : ", myvar2, typeof (myvar2));
// h. undefinied
let myvar3: undefined = undefined;
console.log("h.undefined : ", myvar3, typeof (myvar3));

// ^ 2. FUNCTION RETURN TYPES :
console.warn("(2) FUNCTION RETURN TYPES =======================");
// a. Void Return Type : Functions that do not return a value use void as their return type.
function add(a: number, b: number) {
    console.log(a, b);
}
add(1, 2);
// b. Explicit Return Type : function mul(a: number, b: number): number
function mul(a: number, b: number) {
    return a * b;
}
mul(3, 6);
// c. Any Return Type : If you want a function to return a value of any type, you can specify any as the return type. 
function sub(a: number, b: string): any {
    return a + b;
}
sub(4, "text");
// d. Union Return Type : You can specify multiple possible return types using union types (|).
function div(a: number, b: any): string | number {
    return a + b;
}
div(555, "text");



// ^ 3. Type Alias :
console.warn("(3) TYPE ALIAS =======================");
// In TypeScript, the type keyword is used to create aliases for different data types or combinations of data types. This allows you to define custom types that can be reused throughout your codebase. Types provide a way to make your code more readable, maintainable, and expressive.
// SYNTAX : type typeVariableName = datatype 
// a. Alias for Primitive Types :
type ID = number; // datatype os stored inside the variable.
let userID: ID = 2444;
console.log(userID, typeof (userID));
type NAME = string;
let userName: NAME = "Piyush";
console.log(userName, typeof (userName));
// b. Union Types :
type RESULT = string | number;
let num1: RESULT = "5555";
console.log(num1, typeof (num1));
let num2: RESULT = 5555;
console.log(num2, typeof (num2));
// c. Object Types :
type User = {
    id: number,
    fname: string,
    lname: string,
    email: string
}
let myUser: User = {
    id: 1,
    fname: "Shreyash",
    lname: "Thaware",
    email: "Shreyash@gmail.com"
}
console.log(myUser);
// d. Function Types :
type FuncType = (num1: number, num2: number) => number;
const myFunc: FuncType = (n, m) => {
    return n * m;
}
myFunc(10, 20);
// e. Intersection Types :
type DataTypeSet1 = {
    id: number,
    username: string
}
type DataTypeSet2 = {
    fullname: string,
    phoneno: number
}
type CombineBothMyType = DataTypeSet1 & DataTypeSet2;
let myData: CombineBothMyType = {
    id: 1,
    username: "Sam@07",
    fullname: "Sam Doe",
    phoneno: 987654321
}
console.log(myData);



// ^ 4. Array :
console.warn("(4) ARRAY =======================");
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);
let names: string[] = ["Piyush", "Herik", "Pankaj", "Pawan", "Praful"];
console.log(names);
let mixedArray: any[] = [1, "Piyush", null, undefined];
console.log(mixedArray);
// Array Methods and Properties :
let fruits: string[] = [];
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Grapes");
fruits.push("Mongo");
fruits.push("Orange");
console.log(fruits);
fruits.pop()
console.log(fruits);
// Readonly Arrays :
let readOnlyArray: readonly number[] = [1, 2, 3, 4];
console.log(readOnlyArray);
// readOnlyArray.push(10); << ERROR
// Array Spread Operator
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [1, 2, 3];
let combinedarray: number[] = [...arr1, arr2[2], ...arr2];
console.log(combinedarray);
// Array Tuple
let myarr: [string, number, null, undefined, number, string, number] = ["A", 1000, null, undefined, 2000, "B", 3000];
console.log(myarr);


// ^ 5. Interface : In TypeScript, interfaces play a crucial role in defining the structure of objects and ensuring type safety. 
console.warn("(5) INTERFACE =======================");
// a. Using Type Alias
type EmployeeSchema = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNo: number,
    pinCode: number,
    isWorking: boolean
}
let myObj: EmployeeSchema = {
    firstName: "Herik",
    lastName: "Sevak",
    email: "Herik@gmail.com",
    phoneNo: 987654321,
    pinCode: 44444,
    isWorking: false
}
console.log(myObj);

// b. Using Interface
interface EmployeeSchemaRecord {
    firstName: string,
    lastName: string,
    email: string,
    phoneNo: number,
    pinCode: number,
    isWorking: boolean
}
let myObj1: EmployeeSchemaRecord = {
    firstName: "Herik",
    lastName: "Sevak",
    email: "Herik@gmail.com",
    phoneNo: 987654321,
    pinCode: 44444,
    isWorking: false
}
console.log(myObj1);

// & Inheritance Using Interfaces
interface A {
    id: number,
    fname: string,
}
interface B extends A {
    lname: string,
    email: string
}
let mydetails: B = {
    id: 10,
    fname: "Sam",
    lname: "Rajput",
    email: "Samrajput@gmail.com"
}
console.log(mydetails);

// & Function Types in Interfaces
interface MathFunc {
    (x: number, y: number): number;
}
let addValues: MathFunc = function (a, b) {
    return a + b
}
console.log(addValues(10, 40));

// ^ 6. Optional Properties : You can mark certain properties as optional by adding a ? after the property name.
console.warn("(6) OPTIONAL PROPERTIES =======================");
type Details = {
    fname: string,
    lname?: string,  // Optional Information
    email: string,
    phone?: number   // Optional Information
}
let myDetail: Details = {
    fname: "Pankaj",
    email: "Pankaj@gmail.com",
}
console.log(mydetails);


// ^ 7. Readonly Properties : You can mark properties as readonly, meaning they can only be assigned a value when the object is created.
console.warn("(7) READONLY PROPERTIES =======================");
interface SecurityData {
    readonly PrivateKey: number,
    PublicKey: number,
}

let myAccount: SecurityData = {
    PrivateKey: 345355, // Assign a value to PrivateKey
    PublicKey: 1234321
};
console.log(myAccount);


// ^ 8. FUNCTION :
console.warn("(8) FUNCTION =======================");
// 1. Function Declaration:
function myadd(x: number, y: number) {
    return x + y;
}
console.log(myadd(1, 4));
// 2. Function Types:
type MyFuncType = (num1: number, num2: number) => void;
const myNewFunc: MyFuncType = (num1, num2) => {
    console.log(num1 * num2);
}
myNewFunc(10, 40);
// 3. Optional Parameters:
function greet(name: string, message?: string) {
    if (message) {
        return `Hello ${name}, ${message}`
    }
    else {
        return `Hello ${name}`
    }
}
console.log(greet("Piyush"));
console.log(greet("Sahil", "typescript is easy"));
// 4. Default Parameters:
function mysum(a: number, b: number = 300) {
    console.log(a + b);
}
mysum(80);
// 5. Rest Parameters:
function faltuCode(...array: number[]) {
    console.log(...array, array[3], array[1]);
}
faltuCode(2, 4, 6, 8, 10);
// Rest Parameter with function type
type MyFuncTypes = (...myArray: string[]) => string[];
const myFunCall: MyFuncTypes = (...m) => {
    console.log(...m);
    return m; // Return the array as specified by MyFuncTypes
}
// Call the function
myFunCall("Piyush", "Shreyash", "Sahil", "Sharique");

// ^ 9. FUNCTION WITH OBJECT :
// 1. Passing Object as a Parameter:
console.warn("(9) FUNCTION WITH OBJECT =======================");
interface Person {
    firstName: string,
    lastName: string,
    age: number
}
function greetPerson(person: Person) {
    return `Hello,${person.firstName} ${person.lastName}\n${person.age}`;
}
let newPerson: Person = {
    firstName: "Sam",
    lastName: "Rajput",
    age: 23
}
console.log(newPerson);
console.log(greetPerson(newPerson));
// 2. Object Destructuring in Function Parameters:
interface Product {
    name: string;
    price: number;
}

function displayProductInfo({ name, price }: Product): void {
    console.log(`Product: ${name}, Price: $${price}`);
}

let laptop: Product = { name: "Laptop", price: 999 };
displayProductInfo(laptop); // Output: Product: Laptop, Price: $999
// 3. Optional Object Properties:
interface UserDetails {
    name: string;
    age?: number; // Optional property
}

function displayUserInfo(user: UserDetails): void {
    if (user.age) {
        console.log(`Name: ${user.name}, Age: ${user.age}`);
    } else {
        console.log(`Name: ${user.name}`);
    }
}
let user1: UserDetails = { name: "John" };
let user2: UserDetails = { name: "Jane", age: 25 };
displayUserInfo(user1); // Output: Name: John
displayUserInfo(user2); // Output: Name: Jane, Age: 25


