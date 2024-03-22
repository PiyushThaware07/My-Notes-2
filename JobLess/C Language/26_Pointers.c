/*
Pointer : It is a variable which stores the address of another variable.
          It can be type int,char,array,function,or any other pointer.
          It size depends on the architecture Ex for 2 bytes for 32 bit.
          Pointer in c language is declare using *

          &a --> Address of a
*/

#include <stdio.h>
int main()
{
    /* code */
    int a = 45;
    int* Pointer = &a; // Pointer will store the address of a
    printf("The value of a is : %d\n",a);      // 45
    printf("The address of a is : %x",&a);     //61ff1c   
    printf("\n"); 
    printf("The value of a using pointer is : %d\n",*Pointer);  // 45
    printf("The hexadeciaml address pointer to a is : %x\n",Pointer);   // 61ff1c    : a ka address 
    printf("The address of pointer 'Pointer' is : %p",&Pointer);        // 0061FF18  : Pointer ka kudh ka address.As pointer is also a variable.
    // note : %x is address in hexa decimal , %p is 
    return 0;
}


/*
A pointer that is not assigned any value but Null is known as the Null Pointer.
In computer programming a null pointer is a pointer that does not point any object or function.
int* ptr=NULL;
*/

// Creating a null pointer :
#include <stdio.h>
int main()
{
    /* code */
    int* ptr=NULL;
    printf("The address of 'ptr' is : %d\n",ptr); //  0
    return 0;
}
