// 1. Create an array of numbers and take input from the user to add numbers to this array.
let arr1 = [1,2,3,4]
arr1.push(1000);
console.log(arr1);

// 2. Keep adding numbers to the array in question-1 until 0 is added the array.
let arr2 = [1,2,3,4]
let num = 0
if (num!=0)
{
    arr2.push(num);
    console.log(arr2);
}

// 3. filter for numbers divisible by 10 from a given array.
let arr3 = [1,2,3,4,5,6,7,8,9,10,20]
let a3 = arr3.filter((item)=>{
    return item%10==0;
})
console.log(a3);

// 4. Create an array of square of given numbers.
let arr4 = [1,2,3,4,5]
let a4 = arr4.map((item)=>{
    return item*item;
})
console.log(a4);


// 5. Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated).
let arr5 = [1,2,3,4,5]
let a5 = arr5.reduce((item1,item2)=>{
    return item1*item2
})
console.log(a5);
