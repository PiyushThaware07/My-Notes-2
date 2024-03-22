# ==================== CHAPTER : 6 --->> Conditional Expression ====================
'''
1) if else and elif : if else and elif statements are a multiway decision taken by our 
program due to certain conditions in our code.
        Syntax --->> 
                     if(condition):
                         print("Yes")
                    elif(condition):
                         print("No")
                    else:
                        print("May be")     
'''
# ==================================================================================
# 1) if-elif-else ladder :--------->>
age = 1
if(age == 18):
    print("Yes, you can drive a vechile now")
elif(age > 18):
    print("yes , yes you can drive")                  
else:
    print("Stay out of it for now") 

# Multiple if statement :
age = 20
if(age >= 18):
    print("Your are adult now")
if(age > 20):
    print("Now its time to do somthing in life")
if(age > 25):
    print("Now its time to get a good job")
elif(age > 25):
    print("Now its time to get married")
else:
    print('Enjoy life')

# Quick Quiz : Write a python program to print yes when the age entered by user is greater then or equal to 18?
age = int(input("Enter Your Age : "))
if(age > 18):
    print('Yes')
else:
    print('No')

# ==================================================================================
'''
Relational Operators :
relational operators are used to evaluate conditions inside the if statements.
some examples of relational operators are :
== ----------> Equals
>= ----------> Greater than equal to
<= ----------> Less than equal to
!= ----------> Not equal to

---------------------------------------------------------------------------------------------

Logical Operators : In python logical operators an conditional statements.
                    Examples :
                    and ----> true if both operands are true else false.
                    or  ----> false if both operands are false else true.
                    not ----> inverts true to false or vice versa.

'''
# =============================================================================================

a = 18
if(a == 18):
    print('True')
else:
    print('False')

# Logical Operators : And
Age = 20
if(Age > 18 and Age < 25):
    print("You are Adult")
elif(Age > 25 and Age < 30):
    print('Time to marry')
else:
    print("Enjoy life")

# Logical Operator : Or
Age = 0
if(Age > 18 or Age < 25):
    print('yes')
else:
    print('No')

# Logical Operator : not
Age = 10
if(Age == 20):
    print('Yes')
elif(Age != 20):
    print('No')

# ==============================================================================================
'''
3) Elif Clause : elif clause means same as else-if clause.An statement can be chained together
                 with a lot pf these elif statements followed by an else statement.

                 Syntax ----> if(condition):
                                     # code
                               elif(condition1):
                                     # code
                               elif(condition2):
                                     # code
                               else:
                                     # code 
    Important Notes : 1) There can be any number of elif statement.
                      2) Last else is executed only if all the conditions inside elifs fails.    
'''
