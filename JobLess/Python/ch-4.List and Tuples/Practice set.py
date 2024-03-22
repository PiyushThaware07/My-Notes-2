# Question 1: Write a program to store seven fruits in a list entered by user ?
f1 = input("Enter Fruit Number 1 : ")
f2 = input("Enter Fruit Number 2 : ")
f3 = input("Enter Fruit Number 3 : ")
f4 = input("Enter Fruit Number 4 : ")
f5 = input("Enter Fruit Number 5 : ")
f6 = input("Enter Fruit Number 6 : ")
f7 = input("Enter Fruit Number 7 : ")
myfruitList = [f1, f2, f3, f4, f5, f6, f7]
print(myfruitList)

#---------------------------------------------------------------------------------------
print(" ")
# Question 2 : Write a program to store the marks of 6 students and display them into a sorted manner ?
marks = [32,4,15,78,54,24]
marks.sort()
print(marks)

#----------------------------------------------------------------------------------------
print("")
# Question 3 : write a progrm to sum a list with 4 numbers ?
a = [2,4,65,78]
print(a[0]+a[1]+a[2]+a[3])
print(sum(a))

#----------------------------------------------------------------------------------------
print("")
# Question 4 : Write a program to count the number of zeros in the following tuples : a=(7,0,8,0,0,9)
a = (7,0,8,0,0,9)
print("No of zeros in above tuples list : ",a.count(0))
#----------------------------------------------------------------------------------------
print("")
# Question 5 : Check that a tuple cannot be changed in python ?
numbers = (10,2,31,84,54,33)
numbers[0]=100
print(numbers[0])
# o/p -------------->> TypeError: 'tuple' object does not support item assignment