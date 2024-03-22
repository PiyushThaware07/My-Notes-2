// 1. Synchronous Programming Language :
console.log("Task-1");
console.log("Task-2");
console.log("Task-3");


// 2.Asynchronous Programming Language :
console.log("Job-1");
setTimeout(() => {
    console.log("Job-2");
}, 3000);
console.log("Job-3");