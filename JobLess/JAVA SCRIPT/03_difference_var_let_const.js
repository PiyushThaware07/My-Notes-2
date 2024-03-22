console.log("Difference Between Var , Let & Const")
// var is globally scoped var can be updated & re-declared within its scope
var a = "Piyush";
{  // this is block
    var a = 1000;
    console.log(a);
}
console.log(a);

// let are block scoped let can be updated but not re-declared.
let b = "Piyush"
{
    let b = 1000;
    console.log(b);
}
console.log(b);

// const are block scoped const can neither be updated nor be re-declared.
const c = 200
console.log(c)
c = 3000 // error
console.log(c)