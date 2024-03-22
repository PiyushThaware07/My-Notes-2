/*
Arrays and Pointer Arithmetic in C :
~ There are four arithmetic operator that can be used on pointer :
  ++ , -- , + , -
*/

#include <stdio.h>
int main()
{
    /* code */
    int a = 50;
    int* ptr = &a; // storing address of a
    printf("The address of a is : %d\n",ptr);   // address of a 
    printf("The address of a is : %d\n",ptr+1); // address of a  // ptr+1 mean ek size of int jodega and the size of int is 4 byte.
    printf("The address of a is : %d\n",ptr+2); 
    return 0;
}



#include <stdio.h>
int main()
{
    /* code */
    char a = '1';
    char* ptr = &a; // storing address of a
    printf("The address of a is : %d\n",ptr);   // address of a 
    printf("The address of a is : %d\n",ptr+1); // address of a // char takes 1 byte 
    printf("The address of a is : %d\n",ptr+2); 
    return 0;
}


#include <stdio.h>
int main()
{
    /* code */
    char a = '1';
    char* ptr = &a;
    printf("The address of a is : %d\n",ptr); 
    ptr++;
    printf("The address of a is : %d\n",ptr);   // address of a 
    return 0;
}


#include <stdio.h>
int main()
{
/* code */
    int arr[]={1,2,3,4,5};
    printf("Address of First element is : %d\n",&arr[0]);
    printf("Address of second element is : %d\n",&arr[1]);
    printf("Address of Third element is : %d\n",&arr[2]);
    printf("Address of Fourth element is : %d\n",&arr[3]);

    printf("Address of Fifth element is : %d\n",&arr[4]);
    
    printf("Address of first element is : %d\n",arr); // address of first element by default
    printf("Address of Second element is : %d\n",arr + 1);
    // arr++;
    // printf("%d",arr); error occurs 
    int *ptra = arr;
    ptra++;
    printf("%d",arr);
    return 0;
}