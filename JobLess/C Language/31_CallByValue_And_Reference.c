/*
Actual And Formal Parameters :
~ when a function is called the values (expressions) that are passed in the call are called the arguments or actual parameters.
~ Formal parameters are local variables which are assigned values from the arguments when the function is called.

Types of function call in C Programming :
~ call by value     ----> Sending the values 
~ call by reference ----> sending the address or copying the address  
*/

// Example : Call by reference :
#include <stdio.h>
int swap(int *a, int *b)
{
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}
int main()
{
    /* code */
    int x = 34;
    int y = 47;
    printf("x=%d and y=%d\n", x, y);
    swap(&x, &y);
    printf("x=%d and y=%d\n", x, y);
    return 0;
}

/*
Quick Quiz : given two number add them substract them and assign them to a and b using call by reference
*/
#include <stdio.h>
int callByReference(int *Xposition, int *Yposition)
{
    *Xposition = *Xposition + *Yposition;
    *Yposition = *Xposition - *Yposition;
}
int main()
{
    /* code */
    int a = 4;
    int b = 3;
    callByReference(&a,&b);
    printf("sum = %d and sub = %d\n", a, b);
    return 0;
}