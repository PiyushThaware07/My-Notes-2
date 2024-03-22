// 1. Write a program to print the marks of a student in an object using for loop 
obj = {harry: 98, rohan: 70, aakash: 7}

for(let i=0;i<Object.keys(obj).length;i++)
{
    console.log('The marks of '+Object.keys(obj)[i]+" are "+obj[Object.keys(obj)[i]]);
}

// 2. Write a program in Q-1 using for in loop
for(let item in obj)
{
    console.log('The marks of '+item+" are "+obj[item]);
}

// 3. Write a function to find mean of 5 numbers.
const mean=(a,b,c,d)=>
{
    return (a+b+c+d)/4;
}
let y = mean(1,2,3,4);
console.log('mean of 4 no is :',y);
