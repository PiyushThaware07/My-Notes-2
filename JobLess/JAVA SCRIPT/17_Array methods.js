let arr = [1,2,3,4,5]

console.log(arr.length);
console.log(arr.toString()); // convert arr to string


// Joining items of an array
console.log(arr.join("-"));


// used to pop items from an array
arr.pop();
console.log(arr);

// Used to add item to array
console.log(arr.push(2000));
console.log(arr);




arr.shift()  // remove first item
console.log(arr);

arr.unshift(100)  // add or insert item to an array
console.log(arr);