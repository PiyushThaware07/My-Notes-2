// Importing Variables
const import_name = require('./export_modules.js');
console.log('Importing Variables : ', import_name);

// Importing Objects
const import_obj = require('./export_modules.js');
console.log('Importing Objects : ', import_obj);


// Importing Functions
const import_function = require('./export_modules');
console.log('Importing Function:', import_function("Piyush"));