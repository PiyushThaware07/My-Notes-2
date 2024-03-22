/*
Types of loops in JS
for loop – loop a block of code no of times

for in loop – loops through the keys of an object

for of loop – loops through the values of an object

while loop – loops a block based on a specific condition

do-while loop – while loop variant which runs atleast once
*/

// 1. Normal For Loop
console.log('Normal For Loop');
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. for-in loop : 
console.log('For-In Loop');
let obj = {
    "Maths": 100,
    "Physic": 90,
    "chemistry": 80,
    "Hindi": 70,
}
for (let a in obj) {
    console.log('subject =' + a + " & marks = " + obj[a]);
}

// 3. For-of loop
console.log('For-Of Loop');
let str = "Piyush"
for (let b of str) {
    console.log(b);
}