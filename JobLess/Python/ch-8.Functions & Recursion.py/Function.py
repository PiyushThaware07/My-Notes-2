'''
Function : A function is a group of statement that perform the specific tasks.

when the program is get bigger in size and its complexility grows,it gets difficult for the program to keep the track on which piece of code is doing what?
A function can be reused by the programmer in a given program any number of.

Syntax : 
         def fun1():
             print("Hello")

         This above function can be called any no of time   

Example :
         def sum(a,b):
         c=a+b
         return c
        print(sum(1,2)) 

#------------------------------------------------------------------------------------------

Function Call : whenever we want to call our function we put the name of that function followed  following parameters as follows :
                 function_Name()
                 Example :
                 sum()    

#------------------------------------------------------------------------------------------

Function Defination : the part containing the exact set of instruction which are executed during the function call.      

#------------------------------------------------------------------------------------------

Types of Functions in python :
1) Builtin Functions       -------------> Already present in python
            Example : len() , print() , range()
2) User define Functions   -------------> Define by the user
            Example : sum() , greet()


Function With Argument :
A function can accept some values it can work with.We can put these values in the parenthesis A function can also return values as shown below.
Example : where name is argument.
        def greet(name):
        print("Have a good day",name)
        greet("Piyush")
        o/p : Have a good day Piyush
'''
# =============================================================================
# Without Using Function
print("Without Using Function")
marks1 = [45, 78, 86, 77]
Percentage1 = (sum(marks1)/4)*100
print(Percentage1)
marks2 = [35, 88, 86, 72]
Percentage2 = (sum(marks2)/4)*100
print(Percentage2)


# With Using Function
print("With Using Function")
def percent(marks):
    return (sum(marks)/4)*100


# calling functions :
marks1 = [45, 78, 86, 77]
Percentage1 = percent(marks1)
print(Percentage1)

marks2 = [35, 88, 86, 72]
Percentage2 = percent(marks2)
print(Percentage2)


# Example :
def sum(a, b):
    c = a+b
    return c
print(sum(1, 2))

#--------------------------------------------------------------------------------------------------------
# Quick Quiz : write a program to greet the user with "Good Day" using functions.
def greet(name):
    print("Have a good day",name)
greet("Piyush")