class Employee {
    login() {
        console.log(`Employee has logged in`);
    }
    logout() {
        console.log(`Employee has logged out`);
    }
    requestLeave(leaves) {
        console.log(`Employee has requested for ${leaves} leaves`);
    }

    // super demo
    method(x){
        console.log("Employee class method",x);
    }
}

class Programmer extends Employee {
    requestCoffee(x) {
        console.log(`Employee has requested ${x} coffee `);
    }

    requestLeave(leaves) {  // this is called method overriding
        console.log(`Employee has requested for ${leaves+1} leaves,one extra leave`);
    }

    method(number){
        super.method(number);
        console.log("Programmer class method");
    }
}

// let e1 = new Employee();
let e1 = new Programmer();
e1.login();
e1.logout();
e1.requestLeave(4);
e1.method(1000);