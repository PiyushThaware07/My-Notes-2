/*
Conditional statement in c :
1. Decision making statement : if-else
2. choice making statement   : switch
*/

// if-else statements :
#include <stdio.h>
int main()
{
    /* code */
    int age;
    printf("Enter the age :");
    scanf("%d",&age);

    if(age==18)
    {
        printf("You are Adult now!");
    }
    else
    {
        printf("You are not Adult");
    }
}


// If-else-if statements :
#include <stdio.h>
int main()
{
    /* code */
    int age;
    printf("Enter the age :");
    scanf("%d",&age);
    if(age==18){
        printf("You are Adult now!");
    }
    else if(age>18 && age<=24){
        printf("Time for Study");
    }
    else if(age>24 && age<=30){
        printf("Time for Job");
    }
    else if(age>30 && age<60){
        printf("work hard");
    }
    else{
        printf("Enjoy your life");
    }
    return 0;
}


// Quick Quiz : distribute the gift between science or maths students