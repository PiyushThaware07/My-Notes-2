var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ^ 1. DATATYPE :
console.warn("(1) Datatypes =======================");
// a. boolean
var isDone = false;
console.log("a.boolean : ", isDone, typeof (isDone));
// b.  number
var mynum;
mynum = 10;
console.log("b.number : ", mynum, typeof (mynum));
// c. string
var mystring = "Piyush";
console.log("c.string : ", mystring, typeof (mystring));
// d. Array
var myarray = [1, 2, 3, 4, 5];
console.log("d.array : ", myarray, typeof (myarray));
// e. Tuple: Represents an array with a fixed number of elements where each element may be of a different type.
var mytuple = ["Piyush", 1000];
console.log("e.tuple : ", myarray, typeof (mytuple));
// f. any : Represents any type, allowing you to opt out of type checking.
var myvar = 10;
console.log("f.any : ", myvar, typeof (myvar));
// g. null 
var myvar2 = null;
console.log("f.null : ", myvar2, typeof (myvar2));
// h. undefinied
var myvar3 = undefined;
console.log("h.undefined : ", myvar3, typeof (myvar3));
// ^ 2. FUNCTION RETURN TYPES :
console.warn("(2) FUNCTION RETURN TYPES =======================");
// a. Void Return Type : Functions that do not return a value use void as their return type.
function add(a, b) {
    console.log(a, b);
}
add(1, 2);
// b. Explicit Return Type : function mul(a: number, b: number): number
function mul(a, b) {
    return a * b;
}
mul(3, 6);
// c. Any Return Type : If you want a function to return a value of any type, you can specify any as the return type. 
function sub(a, b) {
    return a + b;
}
sub(4, "text");
// d. Union Return Type : You can specify multiple possible return types using union types (|).
function div(a, b) {
    return a + b;
}
div(555, "text");
// ^ 3. Type Alias :
console.warn("(3) TYPE ALIAS =======================");
var userID = 2444;
console.log(userID, typeof (userID));
var userName = "Piyush";
console.log(userName, typeof (userName));
var num1 = "5555";
console.log(num1, typeof (num1));
var num2 = 5555;
console.log(num2, typeof (num2));
var myUser = {
    id: 1,
    fname: "Shreyash",
    lname: "Thaware",
    email: "Shreyash@gmail.com"
};
console.log(myUser);
var myFunc = function (n, m) {
    return n * m;
};
myFunc(10, 20);
var myData = {
    id: 1,
    username: "Sam@07",
    fullname: "Sam Doe",
    phoneno: 987654321
};
console.log(myData);
// ^ 4. Array :
console.warn("(4) ARRAY =======================");
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
var names = ["Piyush", "Herik", "Pankaj", "Pawan", "Praful"];
console.log(names);
var mixedArray = [1, "Piyush", null, undefined];
console.log(mixedArray);
// Array Methods and Properties :
var fruits = [];
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Grapes");
fruits.push("Mongo");
fruits.push("Orange");
console.log(fruits);
fruits.pop();
console.log(fruits);
// Readonly Arrays :
var readOnlyArray = [1, 2, 3, 4];
console.log(readOnlyArray);
// readOnlyArray.push(10); << ERROR
// Array Spread Operator
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var combinedarray = __spreadArray(__spreadArray(__spreadArray([], arr1, true), [arr2[2]], false), arr2, true);
console.log(combinedarray);
// Array Tuple
var myarr = ["A", 1000, null, undefined, 2000, "B", 3000];
console.log(myarr);
// ^ 5. Interface : In TypeScript, interfaces play a crucial role in defining the structure of objects and ensuring type safety. 
console.warn("(5) INTERFACE =======================");
var myObj = {
    firstName: "Herik",
    lastName: "Sevak",
    email: "Herik@gmail.com",
    phoneNo: 987654321,
    pinCode: 44444,
    isWorking: false
};
console.log(myObj);
var myObj1 = {
    firstName: "Herik",
    lastName: "Sevak",
    email: "Herik@gmail.com",
    phoneNo: 987654321,
    pinCode: 44444,
    isWorking: false
};
console.log(myObj1);
var mydetails = {
    id: 10,
    fname: "Sam",
    lname: "Rajput",
    email: "Samrajput@gmail.com"
};
console.log(mydetails);
var addValues = function (a, b) {
    return a + b;
};
console.log(addValues(10, 40));
// ^ 6. Optional Properties : You can mark certain properties as optional by adding a ? after the property name.
console.warn("(6) OPTIONAL PROPERTIES =======================");
var myDetail = {
    fname: "Pankaj",
    email: "Pankaj@gmail.com",
};
console.log(mydetails);
// ^ 7. Readonly Properties : You can mark properties as readonly, meaning they can only be assigned a value when the object is created.
console.warn("(7) READONLY PROPERTIES =======================");
var myAccount = {
    PrivateKey: 345355, // Assign a value to PrivateKey
    PublicKey: 1234321
};
console.log(myAccount);
// ^ 8. FUNCTION :
console.warn("(8) FUNCTION =======================");
// 1. Function Declaration:
function myadd(x, y) {
    return x + y;
}
console.log(myadd(1, 4));
var myNewFunc = function (num1, num2) {
    console.log(num1 * num2);
};
myNewFunc(10, 40);
// 3. Optional Parameters:
function greet(name, message) {
    if (message) {
        return "Hello ".concat(name, ", ").concat(message);
    }
    else {
        return "Hello ".concat(name);
    }
}
console.log(greet("Piyush"));
console.log(greet("Sahil", "typescript is easy"));
// 4. Default Parameters:
function mysum(a, b) {
    if (b === void 0) { b = 300; }
    console.log(a + b);
}
mysum(80);
// 5. Rest Parameters:
function faltuCode() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    console.log.apply(console, __spreadArray(__spreadArray([], array, false), [array[3], array[1]], false));
}
faltuCode(2, 4, 6, 8, 10);
var myFunCall = function () {
    var m = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        m[_i] = arguments[_i];
    }
    console.log.apply(console, m);
    return m; // Return the array as specified by MyFuncTypes
};
// Call the function
myFunCall("Piyush", "Shreyash", "Sahil", "Sharique");
// ^ 9. FUNCTION WITH OBJECT :
// 1. Passing Object as a Parameter:
console.warn("(9) FUNCTION WITH OBJECT =======================");
function greetPerson(person) {
    return "Hello,".concat(person.firstName, " ").concat(person.lastName, "\n").concat(person.age);
}
var newPerson = {
    firstName: "Sam",
    lastName: "Rajput",
    age: 23
};
console.log(newPerson);
console.log(greetPerson(newPerson));
function displayProductInfo(_a) {
    var name = _a.name, price = _a.price;
    console.log("Product: ".concat(name, ", Price: $").concat(price));
}
var laptop = { name: "Laptop", price: 999 };
displayProductInfo(laptop); // Output: Product: Laptop, Price: $999
function displayUserInfo(user) {
    if (user.age) {
        console.log("Name: ".concat(user.name, ", Age: ").concat(user.age));
    }
    else {
        console.log("Name: ".concat(user.name));
    }
}
var user1 = { name: "John" };
var user2 = { name: "Jane", age: 25 };
displayUserInfo(user1); // Output: Name: John
displayUserInfo(user2); // Output: Name: Jane, Age: 25
