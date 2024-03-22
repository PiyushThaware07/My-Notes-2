
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


// Object in ts
// Sometime some methods dont want to ans some question like gender related so the below code is used.
/*
interface Obj {
    height: number,
    width: number,
    gender?: boolean,
}
type FuncType = (n:number,m:number)=>void;

interface NewObj extends Obj {
    salary: number;
    func:FuncType;
}

const myNewObj: NewObj = {
    height: 1000,
    width: 12000,
    salary: 3000,
    func : (n,m)=>{
        console.log(n*m);
    }
}
console.log(myNewObj);
myNewObj.func(10,20);



// 1. Defining the interfaces : Objects in TypeScript can implement interfaces to ensure that they have the required properties and methods specified by the interface.
interface ExamForm {
    fname: string,
    lname: string,
    email: string,
    age: number,
    contact: number,
    feesPaid: boolean
}

// 3. Extending Interfaces: Interfaces can extend other interfaces to inherit their properties and methods while adding new ones.
interface newForm extends ExamForm {
    subject?: string,
    totalMarks: number,
    myfunc: FuncType;
}

// 4. Passing Function in an interface
type FuncType = (n: number, m: number) => void;

// 2. Implementing Interfaces
const myObj: newForm = {
    fname: "Shreyash",
    lname: "Thaware",
    email: "Shreyash@gmail.com",
    age: 23,
    contact: 99999999,
    feesPaid: false,
    totalMarks: 3000,
    myfunc: (n, m) => {
        console.log(n * m);
    }
}
console.log(myObj);
// Calling function
myObj.myfunc(10,20);
*/



// Function
// 1. optional parameter : either you give or not doesnt matter
// type FuncType = (n: number, m: number, l?: number) => number;
// const myFunc: FuncType = (n, m,l) => {
//     if (typeof(l) === "undefined") {
//         return n * m;
//     }
//     else{
//         return n*m*l;
//     }
// }
// console.log(myFunc(5, 2));

// 2. Default Parameter
// Method 01
// type FuncType = (n: number, m: number, l?: number) => number;
// const myFunc: FuncType = (n, m, l = 30) => {
//     return n * m * l;
// }
// console.log(myFunc(5, 2));

// Method 02
// const func = (n:number,m:number,l:number=20):number =>{
//     return n*m*l;
// }
// func(10,20)



// 03. Rest Operator : 
// type FuncType = (...m:number[])=>number[];
// const func:FuncType = (...m)=>{
//     console.log(m);
//     return m;
// }
// func(1,4,5,2,6,4)


// // & FUNCTIONS WITH OBJECTS
// type myObj = { title: string, description: string, thumbnail: string, id: number }
// function getData(myNewObj: myObj):void {
//     console.log(myNewObj);
// }

// const myTestingObj = {
//     title: "Post1",
//     description: "This is description",
//     thumbnail: "thumbnail image",
//     id: 1
// }
// getData(myTestingObj);



// CLASSES
// class MyClass {
//     public property1: number;   // Accessible from outside the class. Accessible from within the class. Accessible from subclasses (inherited members).
//     private property2: number; // Private members are only accessible from within the class they are defined in. They are not accessible from outside the class or by subclasses.
//     protected property3: number;  // Protected members are similar to private members but have an additional access level; they are accessible within the class they are defined in and by subclasses (derived classes).
//     constructor(property1: number, property2: number, property3: number) {
//         this.property1 = property1;
//         this.property2 = property2;
//         this.property3 = property3;
//     }
//     // OR Alternative of above 
//     // constructor (public property1:number,private property2:number,protected property3:number){}
//     getMyValues() {
//         console.log(this.property1 + this.property2 + this.property3);
//     }
// }

// class MySubClass extends MyClass {
//     salary: number = 3000;
//     getSubValues() {
//         console.log(this.property3 + this.salary);
//     }
// }
// let c1 = new MyClass(2, 4, 6);
// console.log(c1.property1);
// c1.getMyValues()
// let s1 = new MySubClass(1, 3, 5);
// console.log(s1.salary);
// s1.getSubValues();

// GETTER & SETTER
// class MyClass {
//     constructor(protected salary: number, public comapny: string) { }

//     get getSalary(): number {
//         return this.salary;
//     }
//     set setSalary(newSalary: number) {
//         this.salary = newSalary;
//     }
// }
// let c1 = new MyClass(1000, "Google");
// console.log(c1.getSalary);
// c1.setSalary = 3000;
// console.log(c1.getSalary);

// CLasses With Interfaces
// interface EmployeeRecord {
//     fname: string;
//     lname: string;
//     salary: number;
//     isFullTime: boolean;
//     getIdFunction?: () => number;
// }
// class MyEmployee implements EmployeeRecord {
//     private id: number;
//     constructor(public fname: string, public lname: string, public salary: number, public isFullTime: boolean) {
//         this.id = Math.floor(Math.random() * 1000); // Assign a random id during object creation
//     }
//     myGetIdFunc() {
//         return this.id;
//     }
// }
// let e1 = new MyEmployee("Piyush", "Thaware", 10000, false);
// console.log(e1);
// console.log(e1.myGetIdFunc())



// ^ DOM MUNIPULATION :
// Type Assertion : baap ko mat sikha chal
// METHOD : 1
// const btn = document.getElementById("btn") as HTMLElement;
// btn.onclick
// METHOD : 2
// const btn = <HTMLElement> document.getElementById("btn");
// btn.onclick
// METHOD : 3
// const btn = document.getElementById("btn") !;
// btn.onclick

// EXAMPLE : FOR IMAGE
// const img = document.querySelector("img") as HTMLImageElement;
// console.log(img.src);
// console.log(img.alt);

// EXAMPLE : FOR FORM
// const form = document.querySelector("form") as HTMLFormElement;
// form.onsubmit = (event: SubmitEvent) => {  // (event: SubmitEvent) specifies that the event object passed to the event handler is of type SubmitEvent.
//     event.preventDefault();
//     const input = document.querySelector("#myforminput") as HTMLInputElement;
//     console.log(input.value);
// }


// ^ TYPE UTILITY
// 1. Partial<Type>
type User1 = {
    name: string,
    email: string
}
// type User2 = {
//     name?: string,
//     email?: string
// }
// Shortcut using type utility
type User2 = Partial<User1>
// OUTPUT : 
// type User2 = {
//     name?: string | undefined;
//     email?: string | undefined;
// }


// 2. Required<Type> : opposite of partial
const User3: Required<User1> = {
    name: "Piyush",
    email: "Piyush@gmail.com"
}  // name and email are required.
console.log(User3);

// 3. Readonly<Type> : It makes all the properties read only where the readonly utility applied
type User4 = {
    readonly name: string;
    readonly email: string;
}
type User5 = Readonly<User4>;
var user: User5 = {
    name: "Sam",
    email: "Sam@gmail.com"
}
console.log(user);
// user.name = "Piyush"



// 4. Record<Keys,Type>
type Fruit = 'apple' | 'banana' | 'orange';
type FruitInfo = {
    color: string;
    taste: string;
};
type FruitDetails = Record<Fruit, FruitInfo>;
const fruitDetails: FruitDetails = {
    apple: { color: 'red', taste: 'sweet' },
    banana: { color: 'yellow', taste: 'creamy' },
    orange: { color: 'orange', taste: 'tangy' },
};
console.log(fruitDetails.apple.color); // Output: "red"
console.log(fruitDetails.banana.taste); // Output: "creamy"
console.log(fruitDetails.orange.color); // Output: "orange"


// 5. Pick<type,Keys>
type OrderInfo = {
    readonly id: number,
    username: string,
    emailAddess: string,
    location: number,
    isActive: boolean
}
type ShippingInfo = Pick<OrderInfo, "location" | "isActive" | "emailAddess">

// 6. Omit<type,Keys>
interface ShippingInfo1 {
    readonly id: number,
    username: string,
    emailAddess: string,
    location: number,
    isActive: boolean
}
type Random = Omit<ShippingInfo1, "username" | "emailAddress">

// 7. Exclude < Type,ExcludeUnion>
type Random1 = Exclude<string | number, number>


// 8 Extract<Type,Union>
type MyUnion = string | number | boolean;
type Random2 = Extract<MyUnion, boolean>

// 9. NonNullLabel<Type>
type MyUnion1 = string | number | boolean | null | undefined;
type Random3 = NonNullable<MyUnion1>

// 10. Parameters <Type>
const myFunc4 = (a: number, b: string) => {
    console.log(a + b);
}
type Random4 = Parameters<typeof myFunc4>


// 11. ConstructorParameters<Type>
class SampleClass {
    constructor(public s: string, public p: string) { }
}
type Random5 = ConstructorParameters<typeof SampleClass>


// 12. ReturnType<type>
const myfunc = (a: number, b: number) => {
    // console.log(a + b);
    return a + b;
}
type FuncType = ReturnType<typeof myfunc>


// 13. InstanceType<type>
class SampleClass1 {
    constructor(public s: string, public p: string) { }
}
type Random6 = InstanceType<typeof SampleClass1>
const user3: Random6 = {
    s: "Piyush",
    p: "SPD"
}




// ^ GENERICS : Generics in TypeScript allow you to create reusable components and functions that can work with a variety of data types while maintaining type safety. They enable you to write code that is more flexible and can operate on different data structures without sacrificing type checking.
// a. Generic With Functions
function myFunction1(n: any): any {
    return n;
}
const ans1 = myFunction1(20);
const ans2 = myFunction1("Piyush");
const ans3 = myFunction1(null);
console.log(ans1, ans2, ans3); // when we dont know the exact return data type so the generic is used to address that problem

// Above Code Using Generic
function myFunction2<myCustomType>(n: myCustomType): myCustomType {
    return n;
}
const ans4 = myFunction2(20);
console.log(ans4);

// Generic With Objects & Type
type MyType = {
    name: string,
    age: number
}
const myDetails: MyType = {
    name: "Sam Rajput",
    age: 23
}
const ans5 = myFunction2(myDetails);
console.log(ans5);
// OR To Call a Function with specifc type like i have passed a string
const ans6 = myFunction2<MyType>(myDetails);
console.log(ans6);
// Example 2 :
const ans7 = myFunction2<string>("Herik Sevak");
console.log(ans7);
// Multiple custom type in generic
function fun<myCustomType1, myCustomType2>(n: myCustomType1, m: myCustomType2): object {
    return { n, m };
}
const ans8 = fun<number, string>(1, "Piyush");
console.log(ans8);
// Extends keyword with generic
function fun1<myCustomType1, myCustomType2 extends myCustomType1>(n: myCustomType1, m: myCustomType2): { n: myCustomType1, m: myCustomType2 } {
    return { n, m };
}
const ans9 = fun1<number, number>(1, 8);
console.log(ans9);


// b. Generic With Array
// Without generic
const arr1: number[] = [1, 2, 3, 4, 5];
console.log(arr1);
// With Generic
const arr2: Array<number> = [1, 2, 3, 5, 3, 2];
console.log(arr2);



// c. Generic With Classes
class Container<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
}

let numberContainer = new Container<number>(10);
console.log(numberContainer.value); // Output: 10

let stringContainer = new Container<string>("hello");
console.log(stringContainer.value); // Output: "hello"


// d. Generic With Interface 
interface Pair<T, U> {
    first: T;
    second: U;
}

let pair: Pair<number, string> = { first: 1, second: "two" };
console.log(pair.first); // Output: 1
console.log(pair.second); // Output: "two"
