/*
Fucntions :
$ functions are used to dicide the larger c program to smaller pieces.
$ A function can be called multiple times to provide reuseability and modularity to the c program.

syntax -
int function_name(){
    #code
    return 0;
}

void - when dont want to written anything then use void.

Types of functions :
1. Library Function ~ already include in c header file.
2. User-define Function ~ created by user according to user needs.to reduce complexity.
*/



#include <stdio.h>
// creating a function
int sum(int a,int b)
{
    return a+b;
}
int main()
{
    /* code */
    int a,b,c;
    a = 9;
    b = 10;
    c = sum(a,b);
    printf("sum is : %d",c);
    return 0;
}

// suppose we have done this with above code then : we will get error 
#include <stdio.h>
int main()
{
    /* code */
    int a,b,c;
    a = 9;
    b = 10;
    c = sum(a,b);
    printf("sum is : %d",c);
    return 0;
}
// creating a function
int sum(int a,int b)
{
    return a+b;
}

// to resolve above error do this :
#include <stdio.h>
// creating a function
int sum(int a,int b); // function prototype // fuction ko declare karna
int main()
{
    /* code */
    int a,b,c;
    a = 9;
    b = 10;
    c = sum(a,b);
    printf("sum is : %d",c);
    return 0;
}
int sum(int a,int b)
{
    return a+b;
}

// void : with argument without return value.
#include <stdio.h>
void printstar(int n)
{
    for(int i=0;i<n;i++){
        printf("%c",'*');
    }
   
}
int main()
{
    /* code */
    // calling the function :
    printstar(7);
    return 0;
}


// without arguemnt with return value.
#include <stdio.h>
int takeNumber(){
    int i;
    printf("Enter a Number : ");
    scanf("%d",&i);
    return i;
}
int main()
{
    /* code */
    int c;
    c = takeNumber();
    printf("Enter number is : %d",c);
    return 0;
}


// without argument & without return values :
#include <stdio.h>
void inputdata(){
    int input;
    printf("Enter the value :");
    scanf("%d",&input);
    printf("The value entered is : %d",input);
}
int main()
{
    /* code */
    inputdata();
    return 0;
}
