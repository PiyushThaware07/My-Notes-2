// 1.Write a JS program to print the following after 2 second delay hello world

const a = async (text) => {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 2000);
    })
    return p;
}

(
    async () => {
        let t = await a("Hello");
        console.log(t);
        let t2 = await a("World");
        console.log(t2);
    }
)()


// 2. Write a JS program to find average of numbers in an array using spread syntax.
function sum(a, b, c){
    return a + b + c;
}
let x = [1,2,3];
console.log(sum(...x));

// 3.Write a JS function which resolves a promise after n seconds. The function takes n as the parameter. Use an IIFE to execute the functions with different values of n.
const a1 = async (text,n=2) => {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 2000*n);
    })
    return p;
}

(
    async () => {
        let t = await a1("Hello");
        console.log(t);
        let t2 = await a1("World");
        console.log(t2);
    }
)()