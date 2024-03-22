/*
Unions in c :
--> Similar to structure 
--> It is also a user define datatype
--> The difference between unions and structure lies in the fact that in structure each member has its
    own storage location,whereas members of a union uses a single shared memory location.
--> The single shared memory location is equal to the size of its largest data member.
--> Example : one family of four member have one bike then all the members uses that bike simultaneously.
    At a time only one person is active.
--> access the members of unions by using (.)member access operator.    
--> Use keyword union to define the union.
--> Then it is very similar to structure.
    example :
    struct student
    {
        float marks // 4 bytes
        int id      // 4 bytes
    }s1;
    now from above struct total memory is : 8 bytes

    union student 
    {
        float marks // 4 byte
        int id      // 4 byte
    }s1;        
    now from above union total memory is : 4 byte as the only one user is active i.e either marks active or else id active.
*/
#include <stdio.h>
#include <string.h>
typedef union Student
{
    /* data */
    int id;
    char name[10];
    float Percentage;
} UNION;
int main()
{
    /* code */
    UNION s1;
    s1.id = 001;
    (strcpy(s1.name, "Piyush"));
    s1.Percentage = 98.90;
    printf("Student id : %d\nStudent name : %s\nStudent Percentage : %f\n", s1.id, s1.name, s1.Percentage);
    return 0;
}