let arr = [2,4,6,8]


// 1. map() – creates a new array by performing some operation on each array element.
console.log("-------- Map function --------");
let mapping = arr.map(function(item){
    return item**2;
})
console.log("Mapping = ",mapping);



// 2. filter() – Filters an array with values that passes a test. Creates a new array.
console.log("-------- Filter function --------");
let filtering = arr.filter(function(i){
    return i>5
})
console.log("Filtering = ",filtering);



// 3. reduce method – Reduces an array to a single value.
console.log("-------- Reduce function --------");
let reducing = arr.reduce(function(i,j){
    return i+j
})
console.log("Reducing = ",reducing);

