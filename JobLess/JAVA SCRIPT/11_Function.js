// A JavaScript function is a block of code designed to perform a particular task.

function findAvg(x,y,z)
{
    let avg = (x+y+z)/3;
    console.log("Avg of three no is :",avg);
}



// Another way to create a function 
const sum = (a,b) => {
    let c = a+b;
    return c;
}


let a = 1;
let b = 2;
let c = 3;
findAvg(a,b,c);

let ans = sum(a,b);
console.log(ans);

// Funtion without argument
const wish=()=>
{
    console.log('Hello Sir');
}
wish();