/*
 Take input from user to pint star patern in reverse or front direction
*/
#include <stdio.h>
void starPrint(int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j <= i; j++)
        {
            printf("* ");
        }
        printf("\n");
    }
}

void reverseStarPrint(int n)
{
    for (int i = 0; i <= n; i++)
    {
        for (int j = i; j < n; j++)
        {
            printf("* ");
        }
        printf("\n");
    }
}

int main()
{
    /* code */
    int n, type;
    printf("Enter 0 star patter \n1 for reverse star pattern : ");
    scanf("%d", &type);
    printf("Enter the value : ");
    scanf("%d", &n);
    switch (type)
    {
    case 0:
        starPrint(n);
        break;
    case 1:
        reverseStarPrint(n);
        break;

    default:
        printf("You have enter invalid choice.");
        break;
    }
    return 0;
}