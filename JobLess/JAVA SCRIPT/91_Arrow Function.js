const sayHello = () => {
    console.log("Hello");
}
sayHello();

// for above code you can also do this
const sayHello1 = () => console.log("Hello1"); console.log("hi");
sayHello1();

// or 
const hello1 = (name, greeting) => console.log("hi,", name, greeting);
hello1("piyush", "good morning")

// ----------------------------
const obj = {
    name: "Pawan",
    role: "Js Developer",
    exp: 10,

    show: function () {
        console.log(this);
        let that = this;
        setTimeout(function () {
            console.log(this); // this will represent window object
            console.log(that);
            console.log(`My name is "${that.name}" and the role is '${that.role}'`);
        }, 2000);
    }
}
obj.show()

// alternative of above code it
const obj1 = {
    name: "Pawan",
    role: "Js Developer",
    exp: 10,

    show: function () {
        console.log(this);
        setTimeout(() => {
            console.log(this); // this will represent window object
            console.log(`My name is "${this.name}" and the role is '${this.role}'`);
        }, 2000);
    }
}
obj1.show()