console.log(`Conditional expressions in JavaScript`);


// ! TypeCasting
let a = "100";
console.log(`type of a`,typeof a);
typecasting = Number.parseInt(a); // types cast to int
console.log('type of a',typeof typecasting);

// ! if-else
let age = 15;
if (age<0)
{
    console.log(`Invalid Age`);
}
else if(age>10 && age<20)
{
    console.log(`Age is btw 10 to 20`);
}
else
{
    console.log(`valid Age`);
}