// Operator : An operator is a symbol used to perform operations in given Programming language.
// Types of Operators :
// 1) Arithmetic Operator                 --------> +  -   *  /  %
// 2) Assignment Operator                 --------> = , += , =+
// 3) Relational or Comparision Operator  --------> >= , <= , ==
// 4) Logical Operator                    --------> and , or , not : && , || , !
// 5) Bitwise Operator                    --------> & , |  , ^


// ============================================================================================
#include <stdio.h>
int main()
{
    /* code */
    int num1,num2;
    num1 = 63;
    num2 = 45;
    printf("num1 + num2 = %d\n",num1+num2);
    printf("num1 - num2 = %d\n",num1-num2);
    printf("num1 * num2 = %d\n",num1*num2);
    printf("num1 / num2 = %d\n",num1/num2);

    // Agar floating number use karna hai toh

    float num3;
    num3 = 3.54;
    printf("num1 + num3 = %f\n",num1+num3);
    printf("num1 - num3 = %f\n",num1-num3);
    printf("num1 * num3 = %f\n",num1*num3);
    printf("num1 / num3 = %f\n",num1/num3);
    return 0;
}

// Relational Operator 
#include <stdio.h>
int main()
{
    /* code */
    
    int a,b;
    a = 10;
    b = 10;
    printf("is a equals to b %d\n",a==b);
    printf("is a is not equals to b %d",a!=b);
    return 0;
}

// Logical Operator :
#include <stdio.h>
int main()
{
    /* code */
    int a,b;
    a = 10;
    b = 10;
    printf("And : %d",a==10 && b==10);
    printf("or : %d",a==10 || b==10);
    printf("not : %d",a!=10 && b==10);
    return 0;
}

// Bitwise Operator :
#include <stdio.h>
int main()
{
    /* code */
    int a,b;
    a = 2;
    b = 3;
    printf(a&b);
    printf(a|b);
    printf(a^b);
    return 0;
}

// Here 1 -> True or 0 --> False 

