// create a code to write a fabonaccie series.
#include <stdio.h>
int fabonaccie_series(int n)
{
    if(n==1 || n==2)
    {
        return n;
    }
    else
    {
        return fabonaccie_series(n-1)+fabonaccie_series(n-2);
    }
}
int main()
{
    /* code */
    int input;
    input = fabonaccie_series(5);
    printf("%d",fabonaccie_series(input));
    return 0;
}
