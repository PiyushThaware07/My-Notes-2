// Strings are used to store and manipulate text.
let name = "Piyush";
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name,name.length);

/*
Single quote string
Double quote string
Template Literals : Template literals use backtics instead of quotes to define a string.We can insert variables directly in template literal. This is called string interpolation.
*/
let SingleQuote = 'Single'
let DoubleQuote = "Double"
console.log(SingleQuote,DoubleQuote);


let boy = "Roshan";
let girl = "Rakhi";
let TemplateLiterals = `${boy} is friend of ${girl}`
console.log(TemplateLiterals);

// Escape Squence Character :
let fruit = "Bana\|na";
console.log(fruit);