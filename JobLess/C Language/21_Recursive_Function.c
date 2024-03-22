// Recursion : when function call itself is called recursion. Example : fibonacci series,factorial finding,Hanoi,etc.

#include <stdio.h>

int factorial(int number)
{
    if (number==1 || number==0)
    {
        return 1;
    }
    else
    {
        return (number*(factorial(number-1)));
    }
}
int main(){
    /* code */
    int num;
    printf("Enter the number you want the factorial :");
    scanf("%d",&num);
    printf("The factorial of %d is %d",num,factorial(num));
    return 0;
}