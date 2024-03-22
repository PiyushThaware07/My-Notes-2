#include <stdio.h>
#include <string.h>
struct Student
{
    /* data */
    int std_id;
    char std_name[20];
};

struct Student s1; // global variables
int main()
{
    /* code */
    s1.std_id = 1;
    strcpy(s1.std_name,"Piyush");
    printf("Student id is : %d \tStudent name is : %s",s1.std_id,s1.std_name);
    return 0;
}