const input = process.argv;
console.log(input);  
/*
TERMINAL : node 1.js
OUTPUT :
[
  'E:\\APPS\\Node Js\\node.exe',
  'd:\\My Learning\\Node Js\\Node\\04_Getting_Input\\1.js'
]
*/

const value1 = input[2];
const value2 = input[3];
// TERMINAL : node 1.js piyush thaware
console.log(value1,value2);
/*
[
  'E:\\APPS\\Node Js\\node.exe',
  'D:\\My Learning\\Node Js\\Node\\04_Getting_Input\\1.js',
  'piyush',
  'thaware'
]
*/
