message = "Global Scope";
function myFunc() {
    let message = "Local Scope";
    {
        let message = "Block Scope";
        console.log(message);
    }
    console.log(message);
}
myFunc();
console.log(message);

// ---------------------------
message = "Global Scope";
function outerFunc() {
    let message = "Local Scope";
    {
        let message = "Block Scope";
        console.log(message);
    }
    let c = function innerFunc() {
        console.log("Inner Function is running", message);
    }
    return c;
}
c = outerFunc();
c();
console.log(message);


// or
function returnFunc() {
    const x = () => {
        let a = 1
        console.log(a)
        const y = () => {
            // let a = 2
            console.log(a)
            const z = () => {
                // let a = 3
                console.log(a)
            }
            z()
        }
        a = 999
        y()
    }
    return x
}

let a = returnFunc()
a()