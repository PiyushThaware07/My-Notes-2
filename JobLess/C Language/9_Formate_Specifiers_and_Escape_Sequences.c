/*
Format Specifier : It is the way to telkl the compiler which type of data is in a variable during taking input displaying output to the user.
printf("This is a goodboy %a.bf".var) : It will print var with b decimal points a 'a' character space

types :
1) %d --> Integer
2) %f --> Float
3) %c --> Character
4) %l --> Long
5) %lf --> double
6) %LF --> Long double
*/


#include <stdio.h>
int main()
{
    /* code */
    int a = 100;
    float b = 2.245;
    printf("The value of a is %d \nThe value of b is %f",a,b);
    printf("\n");
    printf("%0.11f",b); // 5 decimal points // o/p : 2.24499988556
    printf("\n");
    printf("%8.4f",b); // 8 character ki space mein 4 deciaml point ke sath print karo
    return 0;
}

/*
Constant : A constant is a value which cant be change in a computer program.
way to define constant in a c program :
1. const keyword
2. #define preprocessor
*/
#include <stdio.h>
#define PI 3.14 // (2)
int main()
{
    /* code */
    const int a = 100; // (1)
    printf("%d",a);
    a = 20; // Error occurs 
    printf("%d",a);


    printf("%f",PI);
    PI = 3.24; // Error occurs
    printf("%f",PI);
    return 0;
}


/*
Escape Sequence in c :
\n --> new line
\b --> backspace
\t --> Tab
\\ --> Backslash
\' --> single Quotes
\" --> Double Quotes
*/

// single line comment 
/* Multiline comment */