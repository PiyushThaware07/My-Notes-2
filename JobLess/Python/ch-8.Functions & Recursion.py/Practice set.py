# Question : 1 ---> using Function Find the graetest of three number ?
def maximum(num1,num2,num3):
    if(num1>num2):
        if(num3>num1):
            return num3
        else: 
            return num1
    else:
        if(num2>num1):
            return num2
        else: 
            return num1
m = maximum(3,5,2)
print("The value of maximum is ",str(m))   

#----------------------------------------
def maximum(num1,num2,num3):
    if num1>num2 and num1>num3:
        return num1
    elif num2>num3 and num2>num1:
        return num2
    elif num3>num1 and num3>num2:
        return num3
print(maximum(5,2,8)) 

#------------------------------------------------------------------------------------------------------

# Question : 2 ---> Write a python program to convert celcius to farenheit ?
def farenheit(value):
    convert = (value * 9/5)+32
    return convert
f = farenheit(273)
print("Temperature in farenheit is",str(f)) 
# o/p :  Temperature in farenheit is 523.4

#------------------------------------------------------------------------------------------------------
print(" ")
# Question : 3 ---> How do you prevent a python print() function to print a new line at the end ?
print("Hello")
print("How")
print("are")
print("You ?")

print("Hello", end="")
print("How", end="")
print("are", end="")
print("You ?", end="")

print(" ")

print("Hello", end=" ")
print("How", end=" ")
print("are", end=" ")
print("You ?", end=" ")

#------------------------------------------------------------------------------------------------------
print(" ")
# Question : 4 ----> Write a recursion function to calculate the sum of first n natural numbers.
# formula : n(n+1)/2
def Natural(n):
    if(n==0):
        return 0
    else:
        return (n*(n+1))/2 
print(Natural(6))   

#------------------------------------------------------------------------------------------------------
print(" ")
'''
 Question : 5 ----> Write a python fuction to print first n lines of the following pattern : 
                    * * *
                    * *
                    *
                    for n=3
''' 
n = 3
for i in range(n):
    print("*"*(n-i))

#------------------------------------------------------------------------------------------------------
# Question : 6 ----> Convert inches into cm using python program.
def convert(value):
    p = value*2.54
    return p
print(convert(23))   

#------------------------------------------------------------------------------------------------------
'''
print(" ")
greet = "               Good Morning Sir                 "
print(greet)
print(greet.strip())

Strip Function used to remove spaces around the word of letter or line.
'''
#----------------------------------------------------------------------------
# Question : 7 ---> write a python program to remove a given word from a string and strip it at the same time ?
def remove_and_split(string,word):
    newStr = string.replace(word,"")
    return newStr.strip()
greet = "               Good Morning Sir                 "
n = remove_and_split(greet,"Morning")
print(n)    




#------------------------------------------------------------------------------------------------------
print(" ")
# Question : 8 ----> Write a pyhton program to print multiplication table ?
n = 4
for i in range(0,11):
    print(str(n)+"X"+str(i)+"="+str(n*i))