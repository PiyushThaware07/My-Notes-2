console.log('Operators in JS');
let a = 45;
let b = 4;
console.log('1. Arithmetic Operators ');
console.log('a + b =',a+b);
console.log('a - b =',a-b);
console.log('a * b =',a*b);
console.log('a / b =',a/b);
console.log('a % b =',a%b);
console.log('a ** b =',a**b);
console.log('increment a',a++);
console.log(a);
console.log('increment a',++a);

console.log('2. Assignment Operator');
console.log(a+=5);
/*
= , += , -= , *= , /= , %= , **=
*/

console.log('3. Comparison Operator');
let comp1 = 6;
let comp2 = "6";
console.log('comp1 == comp2',comp1==comp2);
console.log('comp1 != comp2',comp1!=comp2);
console.log('comp1 === comp2',comp1===comp2); // Equal value and type
console.log('comp1 !== comp2',comp1!== comp2); // Not equal value or not equal type
console.log('comp1 > comp2',comp1>comp2);
console.log('comp1 < comp2',comp1<comp2);
console.log('comp1 <= comp2',comp1<=comp2);
console.log('comp1 >= comp2',comp1>=comp2);

console.log('4. Logical Operators');
/*
&& --> logical and
|| --> logical Or
! --> logical not
*/