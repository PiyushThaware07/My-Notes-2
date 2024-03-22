#include <stdio.h>   // Pre Processor command // hum ko ek stdio.h naam ki file ki need hai hum ko vo la ke laga do .h stands for header

int main()  // Functions (main is function name)
{
    /* code */
    printf("Hello World\nPiyush\n");

    int a,b;  // defining the integer 
    printf("Enter number a :"); // used to print
    scanf("%d",&a);  // use to take input from user (&a -- Address of a same for b)
    printf("Enter number b :");
    scanf("%d",&b);

    printf("Sum : %d",a+b);
    return 0;
}

// in command prompt write : gcc filename.c this will create a file (a.exe) if we want to create custom name file then write this : gcc Basic_Introduction_4.c -o Piyush

// for compiling the file we need to type : gcc filename -o Piyush 
// for run the code through command prompt write : .\Piyush.exe