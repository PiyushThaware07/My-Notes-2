/*
Why or what Dynamic Memory Allocation :
~ An Statically allocated variable or array has fixed size in memory.
~ we have learn to create big enough arrays to fit in our inputs but this doesnt seem like as optimal way to allocate memory.
~ memory is very usefull resource.
~ clearly we need a way to request memory or runtime.
~ Dynamic Memory Allocation is a way in which the size of the data structure can be changed during the runtime.

Static Memory Allocation :
* Allocation is done before the programs execution.
* There is no memory reuseability and the memory allocated cannot be free.
* Less efficient.

Dynamic Memory Allocation :
* Allocation is done during the programs execution.
* There is memory reuseability and the allocated meory can be free when not required.
* More efficient.

Memory assigned to a program in a typical architecture can be broken down into four segments :
1. code
2. static / global variables
3. stack
4. Heap
*/
#include <stdio.h>

int main()
{
    /* code */
    
    return 0;
}

//  write this is terminal : gcc 45_Dynamic_Memory_Allocations.c ; size .\a.exe
text    data     bss     dec     hex filename
14344    1532     112   15988    3e74 .\a.exe