class GrandFather {
    constructor(name,age) {
        this.name = name;
        this.age = age;
        console.log("This is GrandFather Constructor",name,age);
    }
}

class Father extends GrandFather {
    constructor(...args) {
        super(...args)
        console.log("This is Father class Constructor",this.name,this.age);
    }
}

let f = new Father("Ronak",21);