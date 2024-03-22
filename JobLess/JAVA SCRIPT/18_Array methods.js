let arr = [1,2,3,4,5]
console.log(arr);

// 7. delete – Array elements can be deleted using the delete operator.
delete arr[0]
console.log(arr,",length of array remain as it is = ",arr.length);

// 8. concat() – used to join array to the given array.
let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]
let arr3 = [9,10,11,12]
let arr4 = arr1.concat(arr2,arr3)
console.log(arr4);

// 9. sort() – sort() method is used to sort an array alphabetically.
let arr5 = [3,2,4,1,5]
console.log(arr5.sort());

// 10. reverse() – Reverses the elements in the source array.
console.log(arr5.reverse());

// 11. splice() – splice can be used to add new items to an array.
const numbers = [1,2,3,4,5]
numbers.splice(2,1,23,24)
console.log(numbers);
//here, 2 is the position to add, 1 depicts the no. of elements to remove, and 23, 24 are the elements of be added.


// 12. slice() – slices out a piece from an array. It creates a new array.
const num = [1,2,3,4]
console.log(num.slice(2));
console.log(num.slice(1,3));