// Break : It is used to get exit from loop.
#include <stdio.h>
int main()
{
    /* code */
    int i;
    for (i = 1; i < 10; i++)
    {
        if (i == 5)
        {
            printf("Break Occurs Here");
            break;
        }
        printf("%d\n", i);
    }
    return 0;
}


// Continue : It is used to continue run the code.
#include <stdio.h>
int main()
{
    /* code */
    int i;
    for (i = 1; i < 10; i++)
    {
        if (i == 5)
        {
            printf("Continue Occurs Here\n");
            continue;
        }
        printf("%d\n", i);
    }
    return 0;
}