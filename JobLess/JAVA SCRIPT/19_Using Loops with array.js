let arr = [100, 300, 600, 800, 1200]
for (let i = 0; i < arr.length; i++) {
    console.log(`at Index ${i} the value is ${arr[i]}`);
}

// 1. forEach loop – calls a function, once for each array element.
console.log("-------- For Each -------");
arr.forEach((element)=>{
    console.log(element*element);
}) 

// 2. Array.from – used to create an array from any other object.
console.log("-------- Array.from -------");
let name = "Piyush";
let arr1 = Array.from(name)
console.log(arr1);  // [ 'P', 'i', 'y', 'u', 's', 'h' ]

// 3. for … of – for-of loop can be used to get the values from an array.
console.log("-------- for of -------");
for(let j of arr1)
{
    console.log(j);
}

// 4. for … in – for-in loop can be used to get the keys from an array.
console.log("-------- for in -------");
for(let k in arr1)
{
    console.log(k);
}
