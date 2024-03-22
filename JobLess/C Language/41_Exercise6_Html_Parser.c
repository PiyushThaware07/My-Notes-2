#include <stdio.h>
#include <string.h>

void parser(char *string)
{
    int inside = 0; // variable to track whether we are inside the tag!
    int index = 0;
    for (int i = 0; i < strlen(string); i++)
    {
        if (string[i] == '<')
        {
            inside = 1;
            continue;
        }
        else if (string[i] == '>')
        {
            inside = 0;
            continue;
        }
        if (inside == 0)
        {
            string[index] = string[i];
            index++;
        }
    }
    string[index] = '\0';
    // Removeing the tariling spaces :
    while (string[0] == ' ')
    {
        // Shift the string to the left
        for (int i = 0; i < strlen(string); i++)
        {
            string[i] = string[i + 1];
        }
    }
    // Removeing the trilling spaces from  the end :
    while (string[strlen(string) - 1] = ' ')
    {
        string[strlen(string) - 1] = '\0';
    }
}
int main()
{
    /* code */
    char string[] = "<h1>                  This is a Heading        </h1>";
    parser(string);
    printf("The parse string is ~~%s~~", string);
    return 0;
}