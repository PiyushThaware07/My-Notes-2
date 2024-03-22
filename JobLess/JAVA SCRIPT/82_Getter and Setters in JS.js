class Employee {
    details() {
        console.log(`Employee name is "${this.name}"`); // or you can also  use this._name
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

let e1 = new Employee("Herik");
e1.details();
// Getting name
console.log("Getting Name :", e1.name);
// Setting name
e1.name = "Pawan";
e1.details();
console.log("Getting Name :", e1.name);

// Example :
const obj = {
    "name": "Piyush",
    "age": 22,
    "language": "Python",

    // getting language
    get lang() {
        return this.language
    },

    set lang(newLanguage) {
        this.language = newLanguage;
    },
}

console.log(obj);
console.log(` Getting Language ---> ${obj.lang}`);
// setting Language
obj.lang = "JavaScript";
console.log(obj);
console.log(` Getting Language ---> ${obj.lang}`);


// Instanceof ----------------------------------------
class A {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log("Running...");
    }
}
class B extends A {
    stop() {
        console.log("Stopping...");
    }
}

let a = new B("temp");
// 1. The instanceof Operator allows to check whether an object belongs to a certain class
console.log(a instanceof A);
// 2. It returns true if obj belongs to the Class or any other class inheriting from it.
console.log(a instanceof B);