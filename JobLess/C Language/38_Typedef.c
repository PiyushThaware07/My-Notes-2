#include <stdio.h>
int main()
{
    /* code */
    // typedef <previous_name> <alias_name>;
    typedef unsigned long ul; // jaha per bhi ul likuga uska naam unsignedlong hoga
    typedef int integer;
    ul l1, l2, l3;
    integer a = 4;
    printf("The value of a is %d", a);
    return 0;
}

// ----------------------------------------------------------------------------------
#include <stdio.h>
#include <string.h>
typedef struct Student
{
    /* data */
    int id;
    char name[10];
    int marks;
} std;

int main()
{
    /* code */
    std s1, s2;
    s1.id = 01;
    s1.marks = 98;
    (strcpy(s1.name, "Piyush"));
    printf("Student id/name/marks : %d/%s/%d\n", s1.id, s1.name, s1.marks);
    s2.id = 02;
    s2.marks = 89;
    (strcpy(s2.name, "Shreyash"));
    printf("Student id/name/marks : %d/%s/%d\n", s2.id, s2.name, s2.marks);
    return 0;
}

#include <stdio.h>
int main()
{
    /* code */
    typedef int* intPointer; // int* ka naya naam intPointer hai
    intPointer a,b;
    int c = 89;
    a = &c;
    b = c;
    return 0;
}