/*
String --> string is not a dattype in c.for madeling real world entities we will going to use string ex: name , address,salary
           string in c is created n array of characters.

           Taking string input from user
           char str[53];
           gets(str);
           printf("%s"str);
           puts(str);
*/
#include <stdio.h>
void printstr(char str[])
{
    int i=0;
    while(str[i]!='\0')
    {
        printf("%c",str[i]);
        i++;
    }
}
int main()
{
    /* code */
    // char str[] = {'P','i','y','u','s','h'}; the is not a valid string
    char str[] = {'P','i','y','u','s','h','\0'}; 
    printstr(str);
    printf("\n");
    char str1[] = {'P','i','y','u','s','h'}; // null character
    printstr(str1);

    printf("\n");
    // Another way to create character array :
    char str2[]="PiyushThaware";
    printstr(str2);

    printf("\n");
    char str3[20]="PiyushThaware"; // 19-wordspace or 1 for null character
    printstr(str3);


    printf("\n");

    char str4[10];
    gets(str4);
    printf("Using custom function printstr\n");
    printstr(str4);
    printf("\nUsing printf %s\n",str4);
    printf("using puts : \n");
    puts(str4);
    return 0;
}
