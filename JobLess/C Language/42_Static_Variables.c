/*
Local Variable :
~ Variables which are access inside the function r a block are called local variables.
~ They can only be accessed by the function they are declare in it.
~ They are inaccessible to the function outside the function they are declare in.

Global Vairable :
~ They are the variables define outside the main method.
~ Global variables are accessible throughout the entire progra, from any fucntion.
~ If a local and global variables has the same name then loacl variable take more preference.

Static VAriable :
~ Static Variable are the variable which has a property of perserving their values even they go out of focus.
~ They Preserver there values from the previous scope and are not initialized again.
~ Static variable remains in the memory throughout the span of program.
~ Static variable are initialize to 0 if not initialized explicily.
~ In C , static variables can only be initialized using constant literals.
*/
#include <stdio.h>
#include <string.h>
char global[] = "Global Vairable";

int main()
{
    /* code */
    void func1()
    {
        char local[] = "Local Vairable";
        printf("The local Variable inside the function is : %s\n", local);
    }
    func1();
    //  printf("The local Variable outside the function is : %s\n",local); // Error occurs as local variable is access only inside he fuction.
    printf("The global Variable is : %s\n", global);
    return 0;
}

// -------------------------------------------------------------------------------------
#include <stdio.h>
int b = 34; // global variable
int func1(int b)
{
    printf("THe value of b inside Func1 is : %d\n", b);
    printf("THe address of b inside Func1 is : %d\n", &b);
    return b * 2;
}

int func2(int b1)
{
    printf("THe value of b inside Func1 is : %d\n", b);
    return b1 * 2;
}

int func3()
{
    static int myvar = 60;
    printf("The value of myvar is %d\n",myvar);
    myvar++;
    return myvar;
}
int main()
{
    /* code */
    int b = 3;
    printf("THe address of b inside main is : %d\n", &b);
    int val = func1(b);
    int *ptr = &val;
    printf("The Value of Func1 is : %d\n", val);

    int val1 = func2(b);
    int *ptr1 = &val1;
    

    printf("Staic Variable : \n");
    func3();
    func3();
    func3();
    return 0;
}