// Static methods are used to implement functions that belong to a class as a whole and not to any particular object.

class Animal {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`Animal ${Animal.capitalize(this.name)} is walking`);
    }

    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length);
    }
}

a = new Animal("monkey");
Animal.walk()

// a.capitalize("Ronak"); // this will not work


// Example : --------------------------
class Employee {
    constructor(emp_name) {
        this.name = emp_name;
    }

    emp_details() {
        console.log(`Details for employee name = ${this.name} , ${Employee.applyToAll()}`);
    }

    // static method doesn't belog to particular object ite belongs to whole class
    static applyToAll(){
        return 'and his salary is 80K';
    }
}

e1 = new Employee("Herik")
e1.emp_details();