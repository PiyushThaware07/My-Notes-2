/*
Unit conversion :
g to kg
inch to meters
kms to miles
pounds to kg
*/

#include <stdio.h>
int gram_to_kg(int value)
{
    return value/1000;
}
int main()
{
    int gram;
    gram = gram_to_kg(800);
    printf("%d",gram);
    return 0;
}