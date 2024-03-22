// Switch case statements : choice making statements

#include <stdio.h>
int main()
{
    /* code */
    int day;
    printf("Enter the day : ");
    scanf("%d",&day);

    switch (day)
    {
    case 1:
        printf("Monday");
        break;
    case 2:
        printf("Tuesday");
        break;
    case 3:
        printf("Wednesday");
        break;
    case 4:
        printf("Thrusday");
        break;
    case 5:
        printf("Friday");
        break;
    case 6:
        printf("Saturday");
        break;
    case 7:
        printf("Sunday");
        // break;
    default:
        printf("Not a day");
        break;
    }
    return 0;
}

// want to print defualt then dont use break