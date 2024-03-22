// class : A class is a blueprint for declaring and creating an object
// object : It is an instance of class

class Employee {
  company = "google"; // Class Attributes
  salary = 5000;

  constructor(fname, lname, email) {
    (this.fname = fname), (this.lname = lname), (this.email = email);
  }

  printDetails() {
    console.log(this.company, this.salary, this.fname, this.lname, this.email);
  }
}

let e1 = new Employee("Piyush", "Thaware", "Piyush@gmail.com");
console.log(e1.company);
e1.salary = 40000; // Instance Attributes
e1.printDetails();
console.log(e1.salary);

class Parent {
  fname = "Sam";
  lname = "Ronak";
  constructor(record) {
    this.record = record;
  }
  printDetails() {
    console.log(this.record);
  }
}
class Child extends Parent {
  salary = 20000;
  company = "facebook";

  constructor(record1, record2) {
    super(record1);
    this.record1 = record1;
    this.record2 = record2;
  }
}

let c1 = new Child(10, 20);
console.log(c1.company);
console.log(c1.fname);
console.log(c1.lname);
console.log(c1.salary);
c1.printDetails();

class Parent1 {
  salary = 10000;
}
class Child1 extends Parent1 {
  company = "google";
}
let c = new Child1();
let p = new Parent1();
console.log(c instanceof Parent1);
console.log(c instanceof Child1);
console.log(p instanceof Child1);
console.log(p instanceof Parent1);

(function () {
  console.log("HELLO I AM IMMEDIATELY INVOKE FUNCTION");
})();

// Destructuring : Array
let array = [1, 2, 3, 4, 5, 6];
let [a1, , b1, ...rest] = array;
console.log(a1, b1, ...rest);
// ... spread operator allow to spread element of iterable

// Destructuring : Object
let myObj = {
  fname: "Piyush",
  lname: "Thaware",
  age: 23,
  email: "Piyush@gmail.com",
  salary: 40000,
};
console.log(myObj);
let { fname, lname } = myObj;
console.log(fname, lname);

// Static Method
class MyClass {
  static salary = 10000;

  static getSalary() {
    console.log("I am static method");
  }
}

let m1 = new MyClass();
console.log(MyClass.salary);
console.log(MyClass.getSalary());
