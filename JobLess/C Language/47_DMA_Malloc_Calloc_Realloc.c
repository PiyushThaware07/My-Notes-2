/*
In dynmaic memory allocation the memory is allocated at runtime from the heap segment.
Functions for Dynamic Memory Allocation in c :
~ Following are the few function of DMA
  1. malloc --> It stands for memory allocation.
                It rserves a block of memory with the given amount of bytes.
                The return value is a void pointer to the allocated space.
                Therefore the void pointer need to be casted to the appropriate type as per the requirements.
                However,if the space is insufficient,allocation of memory fails and it returns a NULL pointer.
                All the values at allocated memory are initialized to garbage values.
                    Syntax :
                              ptr = (ptr-type*) malloc(size_in_bytes)
                    Example :
                              int *ptr;
                              ptr = (int*)malloc(3*sizeof(int));            

  2. calloc --> It stands for contiguous allocation.
                It reserves n blocks of memory with the given amount of bytes.
                The return value is a void pointer to the allocated space.
                Therefore the void pointer needs to be casted to the appropriate type as per the requirements.
                However the insufficient space ,allocation of memory fails and it returns a NUlL pointer.
                All the values at allocated memory are initialized to 0.
                   Syntax : 
                              ptr = (ptr-type*) calloc(n,size_in_bytes)
                              where n is number of blocks or kitne size ke 

  3. realloc --> It stands for reallocation.
                 If the dynamically memory is insufficient we can change the size of previously allocated memory using realloc() function.

                 Syntax : 
                              ptr = (ptr-type*) realloc(ptr, new_size_in_bytes)


  4. free   --> free() is used to free the allocated memory.
                If the dynamically allocated memory is not required anymore we can free it using free function.
                This will free the memory being used by the program in the heap.

                Syntax :
                              free(ptr)

*/
//========================================================================================================================================
// Malloc :
#include <stdio.h>
#include <stdlib.h> // all the DMA come under this library.
int main()
{
    /* code */
    // Use of malloc :
    int *ptr;
    ptr = (int *)malloc(5 * sizeof(int)); // now 5 size array were create i.e dynamic array were created
    for (int i = 0; i < 5; i++)
    {
        printf("Enter the elements is array : ");
        scanf("%d", &ptr[i]);
    }

    // Display array values :
    for (int i = 0; i < 5; i++)
    {
        printf("The value at %d is %d\n", i, ptr[i]);
    }
    return 0;
}

// Calloc : memory allocation start with 0 in this by default
#include <stdio.h>
#include <stdlib.h>
int main()
{
    // Use of calloc :
    int *ptr;
    int size;
    printf("The size of array is : ");
    scanf("%d", &size);
    ptr = (int *)calloc(size, sizeof(int));
    for (int i = 0; i < size; i++)
    {
        printf("Enter the elements is array : ");
        scanf("%d", &ptr[i]);
    }

    // Display array values :
    for (int i = 0; i < size; i++)
    {
        printf("The value at %d is %d\n", i, ptr[i]);
    }

    printf("\n");

    // realloc :
    printf("The size of new array that you want to create is : ");
    scanf("%d", &size);
    ptr = (int *)realloc(ptr, size * sizeof(int));
    for (int i = 0; i < size; i++)
    {
        printf("Enter the elements in new array : ");
        scanf("%d", &ptr[i]);
    }

    // Display array values :
    for (int i = 0; i < size; i++)
    {
        printf("The new value at %d is %d\n", i, ptr[i]);
    }
    // free :
    free(ptr); // this will empty the memory
    // Display array values :
    for (int i = 0; i < size; i++)
    {
        printf("The new value at %d is %d\n", i, ptr[i]);
    }
    return 0;
}

// Explanation : Phale array ka size tha 4 in calloc the mein n uska size bada diya dynamitically free se allocated kar ke.