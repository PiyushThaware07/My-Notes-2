# =========================( Practice set )==============================================
# question 1 : Add two numbers
a = 2
b = 5
sum = a+b
print("The sum of a and b is", sum)

# --------------------------------------------------------------------------------------------------------------------------------------------------

# question 2 : write a python program to find the remainder when a number divided by 2 ?
a = 45
b = 15
modulus_operator = a % b
print(modulus_operator)  # ---> when 45/15 { dividend is 3 and remainder is 0 }

# --------------------------------------------------------------------------------------------------------------------------------------------------

# question 3 : Check the type of the variable assigned using input() function ?
a = input("Enter : ")
print(a)
print(type(a))
'''
output --> Enter : 2
         <class 'str' >
'''
# --------------------------------------------------------------------------------------------------------------------------------------------------

# question 4 : use comparision operator to find out whether a given variable a is greater than 'b' or not take a=34 and b=80
a = 34
b = 80
print(a > b)
# output ---> False

# --------------------------------------------------------------------------------------------------------------------------------------------------

# question 5 : write a python program to find the average of two numbers entered by user?
a = int(input("Enter Number1 : "))
b = int(input("Enter Number2 : "))
sum = a+b
avg = sum/2
print("The average of two number is ", avg)

# --------------------------------------------------------------------------------------------------------------------------------------------------

# question 6 : write a python program to calculate Square of a number entered by the user ?
a = int(input("Enter Number1 : "))
square = a*a
print("The square of two number is :", square)
