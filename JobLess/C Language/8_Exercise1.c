#include <stdio.h>
/*
Print a multiplication table entered by user in pretty form
*/
int main()
{
    /* code */
    int input,i;
    printf("Enter the Number :");
    scanf("%d",&input);
    for(i=1;i<=10;i++)
    {
        printf("%d X %d = %d\n",input,i,input*i);
    }
    return 0;
}

