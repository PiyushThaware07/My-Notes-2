// craete an array print the array in normal form or reverse form
#include <stdio.h>
void swap(int *Xposition, int *Yposition)
{
    int temp;
    temp = *Xposition;
    *Xposition = *Yposition;
    *Yposition = temp;
}
void NormalArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        printf("%d", arr[i]);
    }
}
void ReverseArray(int arr[], int size)
{
    int reverse = size;
    while (reverse >= 0)
    {
        for (int i = 0; i < reverse - 1; i++)
        {
            swap(&arr[i], &arr[i + 1]);
        }
        reverse--;
    }
    for (int i = 0; i < size; i++)
    {
        printf("%d",arr[i]);
    }
}
int main()
{
    /* code */
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(int);
    printf("Before reversing array is : ");
    NormalArray(arr, size);
    printf("\n");
    printf("After reversing array is : ");
    ReverseArray(arr, size);
    return 0;
}