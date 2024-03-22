/*
String Functions :
1. strcat() : this function is used to concatenate or combine two strings.
2. strlen() : this function is used to show the length of a string.
3. strrev() : this function is used to show the reverse of a string.
4. strcpy() : this function is used to copy one string into another.
5. strcmp() : this function is used to compare two given strings.
*/
#include <stdio.h>
#include <string.h>
int main()
{
    /* code */
    char string1[] = "Piyush";
    char string2[] = "Shreyash";
    char string3[20];
    puts(strcat(string1, string2));
    printf("The length of string1 is : %d\nThe length of string2 is : %d\n", strlen(string1), strlen(string2));
    printf("The reverse string1 is : %s\nThe reverse string2 is : %s\n", strrev(string1), strrev(string2));
    printf("The strcmp from string1 and string2 returened : %d", strcmp(string1, string2)); // in alpyhabet p comes first so then that of s so o;p is 1 else it can be 0
    return 0;
}

// Quick Quiz : Allow user to enter two strings and then concatenate then by saying that str1 is a friend of str2
#include <stdio.h>
#include <string.h>
int main()
{
    /* code */
    char str1[10];
    char str2[10];
    char str3[] = " is a friend of ";
    printf("Enter name of first friend -->");
    gets(str1);
    printf("%s\n",str1);
    printf("Enter name of second friend -->");
    gets(str2);
    printf("%s\n",str2);
    printf("%s",strcat(strcat(str1,str3),str2));
    return 0;
}
