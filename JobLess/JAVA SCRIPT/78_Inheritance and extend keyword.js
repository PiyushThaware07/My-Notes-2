class GrandFather {
    constructor(name, age, work_status) {
        this.name = name;
        this.age = age;
        this.status = work_status;
    }

    display() {
        console.log(`GrandFather name = "${this.name}" and his age = "${this.age}" and now he is "${this.status}"`);
    }

    work(){
        console.log("GrandFather Work So hard");
    }
}

class Father extends GrandFather{
    // if you have define already constructor in super class i. gf then you dont need to define here as well 
    /*
    constructor(name, age, work_status) {
        this.name = name;
        this.age = age;
        this.status = work_status;
    }
    */
    display() {
        console.log(`Father name = "${this.name}" and his age = "${this.age}" and now he is "${this.status}" now !!!`);
    }
    married(){
        console.log("My Father is Married to my mother");
    }

}

let gf = new GrandFather("Rahul Agrawal",67,"retired");
gf.display();
gf.work();
// gf.married(); // this will give error due to married method is not define gor grandfather class

let f = new Father("Jason Agrawal",40,"onjob");
f.display();
f.married();
f.work(); // father inherite the gf class so now father is able to access method of gf class;