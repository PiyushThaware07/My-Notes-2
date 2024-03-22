/*
Array : An array is the collection of data items of same type.
~ items are store in contiguous memory locations.
~ it can also store the collection of derive data types,such as pointer,structures,etc.
~ one dimensional array is like a list.
~ two dimensional array is like a table. (array ke andhar ek or array)
~ in c language array have no limit for its dimension or storing the data.

Advantages of array :
1. Accessing the item in a given array is very fast.
2. It is used to represent multiple data items of sametype by using only single name.
3. Two dimensional array is also use to make matrix representation.
*/

#include <stdio.h>
int main()
{
    /* code */
    // creating an array
    int marks[4]; // initializing the array
    marks[0]=45;
    marks[1]=98;
    marks[2]=35;
    marks[3]=87;
    printf("The student marks is : %d\n",marks[0]);
    printf("The student marks is : %d\n",marks[1]);
    printf("The student marks is : %d\n",marks[2]);
    printf("The student marks is : %d\n",marks[3]);
    return 0;
}




#include <stdio.h>
int main()
{
    /* code */
    // creating an array
    int marks[4]; // initializing the array
    for(int i=0;i<4;i++)
    {
        printf("Enter the value of %d element of the array\n",i);
        scanf("%d",&marks[i]);
    }
    for(int i=0;i<4;i++)
    {
        printf("Enter the value of %d element of the array is %d\n",i,marks[i]);
    }
    return 0;
}


// One dimensioanl array :
#include <stdio.h>
int main()
{
    /* code */
    // creating an array
    int marks[4]={12,3,45,98}; // initializing & memory allocation the array
    for(int i=0;i<4;i++)
    {
        printf("Enter the value of %d element of the array is %d\n",i,marks[i]);
    }
    return 0;
}

// Two dimensional array :
#include <stdio.h>
int main()
{
    /* code */
    // creating an array
    int marks[2][3]={{1,2,3},{4,5,6}}; // initializing & memory allocation the array
    for(int i=0;i<2;i++)
    {
        for(int j=0;j<3;j++){
            printf("Enter the value of %d element of the array is %d\n",i,marks[i][j]);
        }
        printf("\n");
    }
    return 0;
}