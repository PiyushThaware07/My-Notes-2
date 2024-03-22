/*
Why and how to pass arrays?
--> we can pass arrays to a function when we need to pass a list of values to a given fucntion.
--> we can pass the arrays to a function as follows :
    1. By declaring array as a parameter in the function.
    2. By declaring a pointer in the function to hold the base address of the array.
*/

#include <stdio.h>
int func1(int array[])
{
    for(int i=0;i<5;i++)
    {
        printf("At index '%d',the data store in array is '%d'\n",i,array[i]);
    }
    array[0] = 2333;
    return 0;
}

int func2(int *pointer)
{
    for(int i=0;i<5;i++)
    {
        printf("At index '%d',the data store in array is '%d'\n",i,pointer[i]);
    }
}
int main()
{
    /* code */
    int arr[] = {1,2,3,4,5};
    func1(arr);
    printf("%d",arr[0]);

    printf("\n");

    func2(arr);
    return 0;
}