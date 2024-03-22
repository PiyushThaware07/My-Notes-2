// An array is a collection of items of same data type stored at contiguous memory locations. 

let arr = [1,2,3,4,false,undefined,"Piyush"]
console.log(arr,typeof arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]); // value not present so you will get undefined

console.log("The length of array ->",arr.length);
// change value of an array
arr[0] = 2000;
console.log(arr);