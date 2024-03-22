// What will the following print in JavaScript?
// console.log(“har\””.length)

// 2. Explore the includes, startsWith and endsWith functions of a string.
let sentence = "I dont want to go gym today";
const word = "Gym";
console.log(`The word "${word}" ${sentence.includes(word) ? "is" : "not"} in the sentence`);


// 3.  Extract the amount out of this string “Please give Rs 1000”
let str = 'Please give Rs 1000';
let amount = str.slice("Please give Rs".length);
console.log(amount);

