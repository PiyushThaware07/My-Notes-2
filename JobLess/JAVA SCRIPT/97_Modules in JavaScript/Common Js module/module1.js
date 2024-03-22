const hello = () => {
    console.log("Hello Piyush");
}
// module.exports = hello;

// or
function myFunc(name){
    console.log(`Hello , ${name}`);
}
// module.exports = myFunc;

// or you can do this for multiple export at a single line
module.exports = {hello,myFunc};