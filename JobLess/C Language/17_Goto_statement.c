/*
Goto Statement : 
It is also called jump statement.
It is used to transfer the program control to predefined labels.
goto statement is use to avoided since it causes confusion for the fello programmers in understanding the code.
It preferable when we need to break multiple loop using a single statement at the same time.


syntax :

label:
    # code

goto label:
    # code    
*/

#include <stdio.h>
int main()
{
/* code */
label:
    printf("we are inside label");
    goto end;
    printf("Hello Piyush\n");

    goto label;
end:
    printf("End of label");
    return 0;
}

// o/p : we are inside labelEnd of label

// Example : using goto in nested for loop
#include <stdio.h>
int main()
{
    /* code */
    int num;
    for (int i = 0; i < 10; i++)
    {
        printf("%d\n", i);
        for (int j = 0; j < 10; j++)
        {
            printf("Enter 0 to exit\n");
            scanf("%d",&num);
            if(num==0)
            {
                goto end;
            }
        }
    }
    end:
    printf("You are out now");
    return 0;
}
