/*
What is Structure in c :
~ Structure is user deifne datatype in c
~ using structure allows us to combine data of different types together.
~ It is used to create a compile datatype which contain different type of information.
~ They are very similar to arrays but structure can store data of any type ,which is practically more usefull.

Example :
Suppose we want to store the data of 100+ employess who was working in our company
~ name
~ address
~ email
~ employee_id
So,clearly we need a user defined datatype which contains only this functions 
*/
#include <stdio.h>
#include <string.h>
struct Employee
{
    /* data */
    int id;
    char name[20];
    int salary;
};
int main()
{
    /* code */
    struct Employee e1;
    e1.id = 101;
    strcpy(e1.name,"Piyush");
    e1.salary = 10000;
    printf("Emplyee id : %d\nEmployee name : %s\nEmployee salary : %d\n",e1.id,e1.name,e1.salary);

    printf("\n");

    struct Employee e2;
    e2.id = 102;
    strcpy(e2.name,"Shreyash");
    e2.salary = 20000;
    printf("Emplyee id : %d\nEmployee name : %s\nEmployee salary : %d\n",e2.id,e2.name,e2.salary);

    printf("\n");

    struct Employee e3;
    printf("Emplyee id : %d\nEmployee name : %s\nEmployee salary : %d\n",e3.id,e3.name,e3.salary);
    return 0;
}

// Another way
#include <stdio.h>
#include <string.h>
struct Employee
{
    /* data */
    int id;
    char name[20];
    int salary;
}e1,e2;
void printname()
{
    printf("%s",e1.name);
}
int main()
{
    e1.id = 101;
    strcpy(e1.name,"Piyush");
    e1.salary = 10000;
    printf("Emplyee id : %d\nEmployee name : %s\nEmployee salary : %d\n",e1.id,e1.name,e1.salary);
    printname();
    printf("\n");

    e2.id = 102;
    strcpy(e2.name,"Shreyash");
    e2.salary = 20000;
    printf("Emplyee id : %d\nEmployee name : %s\nEmployee salary : %d\n",e2.id,e2.name,e2.salary);
}