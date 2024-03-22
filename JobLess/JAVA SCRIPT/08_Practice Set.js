// 1. Use logical operators to find whether the age of a person lies between 10 and 20?
let age = 10
if (age>10 && age<=20)
{
    console.log("age inbtw 10 & 20");
}
else
{
    console.log('Not Lies');
}

// 2. Demonstrate the use of switch case statements in JavaScript
let day = 4;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thrusday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;

    default:
        console.log("Not a day");
        break;
}


// 3.Write a JavaScript program to find whether a number is divisible by 2 and 3
var num = 6;
if (num%2==0 && num%3==0)
{
    console.log('Yes no is divisible by 2 and 3');
}
else
{
    console.log("No");
}

// 4. Print “you can drive” or “you cannot drive” based on age being greater than 18 using ternary operator.
let age2 = 19;
let b = age2>18 ? "You can drive":"You cannot drive";
console.log(b);