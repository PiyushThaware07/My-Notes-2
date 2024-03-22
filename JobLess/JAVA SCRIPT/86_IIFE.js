/*
IIFE - Immediately Invoked Function Expressions
1. IIFE is a JavaScript function that runs as soon as it is defined.
*/

let a = () => {
    let p = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(456);
        }, 2000);
    })
    return p;
}

// Alternative of following code is at bottom:
/*
async function myFunc() {
    let b = await a();
    console.log(b);
    let c = await a();
    console.log(c);
    let d = await a();
    console.log(d);
}
myFunc();
*/

// Alternative of above code:
(async function myFunc() {
    let b = await a();
    console.log(b);
    let c = await a();
    console.log(c);
    let d = await a();
    console.log(d);
})() // this is IIFE

// console.log(d); // error due to scope
