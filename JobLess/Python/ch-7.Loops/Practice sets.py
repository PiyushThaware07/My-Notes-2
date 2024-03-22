# -------------------------( Practice set )-----------------------------------------------------------------------
# Question 1 : write a program to print the multiplication table of a given number using for loop
num = int(input("Enter the Number: "))
for item in range(1, 11):
    print(str(num) + "X" + str(item) + "=" + str(item*num))

# ------------------(Short cut)---------------------------------------
print(" ")
for item in range(1, 11):
    print(f"{num}X{item}={num*item}")  # ------> f string

# =============================================================================================================

# Question  2 : write a progarm to greet all the persons names stored in a list l1 and which start with s.
l1 = ["Herik", "Sonam", "Pawan", "Shreyash", "Sahil", "Vinit", "Pawan"]
for name in l1:
    if name.startswith("S"):
        print("Welcome"+" ", name)
    else:
        print(name)

# =============================================================================================================
print(" ")
# Question 3 : Attempt Question 1 using while loop:
num = int(input("Enter the number : "))
item = 1
while item <= 10:
    print(str(num) + "X" + str(item) + "=" + str(item*num))
    item = item + 1
print("End")

# short cut :
num = int(input("Enter the value ="))
i=1
while i<=10:
    print(f"{num}X{i}={num*i}")         
    i = i+1

# =============================================================================================================
# Question 4 : write a program to find out whether the given number is prime or not.
num = int(input("Enter the Number : "))
prime = True
for i in range(2, num):
    if(num % i == 0):
        prime = False
        break
if prime:
    print("The number is prime")
else:
    print("The number is not prime")

# =============================================================================================================
#  Question 5 : write a program to find the sum of the first n natural number
num = int(input("Enter the number :"))
sum=0
hold = num
while num>0:
    sum = sum+num
    num = num-1
print("Sum of first",hold,"natural number is:",sum)    

# =============================================================================================================
# Qurestion 6 : write a program to calculate the factorial of a given number using for loop:
# n! = 1 X 2 X 3 X 4......X(n-1)
num = int(input("Enter the number :"))
factorial = 1
for i in range(1, num+1):
    factorial = factorial * i
print(f"The factorial of this {num} is {factorial}")

#=============================================================================================================
'''
Question 7 : write a program to print the following star pattern :
                              
                              *
                          *   *   *
                       *   *  *   *   *  

                        for n = 4
'''
n=3
for i in range(3):
    print(" " * (n-i-1),end="")
    print("*" * (2*i+1),end="")
    print(" " * (n-i-1))

#=============================================================================================================
'''
Question 8 : write a program to print the following star pattern :
                            *
                            *  *
                            *  *  *
                            *  *  *  *

                           for n = 4 
'''
num = 4
for i in range(4):
    print("*" * (i+1))  
'''
------------ Summary -----------
num = 4
i = 0
* *(0+1) = *
i = 1
* *(1+1) = * *
'''
    
