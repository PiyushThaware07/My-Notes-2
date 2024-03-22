// 1.Create a JS class to create a complex number. Create a constructor to set the real and the complex part.
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    // 2.Write a method to add two complex numbers in the above class.
    add(num) {
        console.log("Num", num.real);
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary

    }
}

let a = new Complex(4, 6);
let b = new Complex(7, 2);
a.add(b);
console.log(a.real, a.imaginary);


// 3.Create a class student from a class Human. Override a method & see changes.
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    walk() {
        console.log(`Human "${this.name}" is walking...`);
    }
}
class Student extends Human {
    walk() {
        console.log(`Student "${this.name}" who age is "${this.age}" is walking`);
    }
}
let s1 = new Student("Piyush", 22);
s1.walk();
// 4. See if Student is an instance of Human using instanceof keyword.
console.log(s1 instanceof Human);
console.log(s1 instanceof Student);


// 5.Use getters & setters to set and get the real and imaginary parts of the complex number.
class ComplexNumber {
    get real() {
        return this._real;
    }

    set real(newReal) {
        this._real = newReal;
    }

    // ----
    get imaginary() {
        return this.img;
    }

    set imaginary(newImg) {
        this.img = newImg;
    }
}
let c1 = new ComplexNumber();
console.log(`Getting data ---> ${c1.real}|${c1.imaginary}`);
// Setting data
c1.real = 2;
c1.imaginary = 3;
console.log(`Complex data ---> ${c1.real}|${c1.imaginary}`);

let c2 = new ComplexNumber();
c2.real = 4;
c2.imaginary = 6;
console.log(`Complex data ---> ${c2.real}|${c2.imaginary}`);