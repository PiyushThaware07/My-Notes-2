'''
Tuples : tuples are the immutiable datatypes in python i.e elements of tuple list can not be changable.

        How to write Tuples : 1) t=()      ------------->> Empty Tuple
                                 print(t)
                              2) t=(1,2,3)
                                 print(t[1])
                                 o/p --->> 2

        What we can do in tuples : 1) creating a tuple using () brackets.
                                   2) Printing the elements of touples using --->> print(t[index])
                                   3) Cannot Update the values of tuples :
                                       Example ----> t = (1,2,4,5)
                                                     t[2] = 43
                                                     o/p --->> TypeError: 'tuple' object does not support item assignment
                                   4) Tuples index start from 0 to (length-1)                   
'''
#==============================================================================================================================
# Empty Tuple ----->>>>>
t=()
print(t)

# tuple with none element is wrong due to it thinks that we had given the brackets to the elements.
t = (1)
print(t)
# But to create the tuple with single element is :
t = (1,)
print(t[0])

t = (1,2,4,5)
# 3) Cannot Update the values of tuples :
# t[2] = 43
print(t[2])

#==============================================================================================================================
print("")
'''
Methods in Tuples :
1) A.count() : A.count(1) will return number of times 1 occurs in A
2) A.index() : A.index(1) will returns the index of first occurence of 1 in A
'''
#-----------------------------------------------------------------------------------------------------
# Methods : 1) Count
A = (1,22,43,5,76,1,1,23,1,45,65,2,1)
print("Number of times one occures in tuples : ",A.count(1))
print("Index of 43 in tuple list is : ",A.index(43))


print(' ')
#==============================================================================================================================
tuple = (1,20.44,"Piyush",True)
print(tuple[0])
print(tuple[1])
print(tuple[2])
print(tuple[3])