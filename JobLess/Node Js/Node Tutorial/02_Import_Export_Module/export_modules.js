// Exporting Variables
var name = "Piyush";
// module.exports = name;


// Exporting Objects
var obj = {
    first_name: "Herik",
    last_name: "Sevak",
    email: "Herik@gmail.com",
    skills: ['HTML', 'CSS', 'Js', "Bootstrap"]
}
// module.exports = obj;


// Exporting Functions
function greet(name) {
    return 'Hello, World! ' + name;
}
module.exports = greet; 