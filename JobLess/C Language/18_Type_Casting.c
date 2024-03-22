#include <stdio.h>
int main()
{
    /* code */
    int a = 3;
    // float b = 20.4;
    float b = (int)20.4 / 4; // Converting float into int : Type Casting
    printf("The value of a is : %d\nThe value of b is : %.3f", a, b);
    return 0;
}
