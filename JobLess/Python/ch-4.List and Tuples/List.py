# --------------------------------------------------( Lists & Tuples )----------------------------------------------------------------
'''
Lists : In python lists are use to store a set of values of an any data type.
        Example --->  Friends = ["Pawan","Herik","Vinit","Punit"]
                      Numbers = [1,2,3,4,5]
        Note ------> List are ordered.
                     Index starts from zero to (length-1)

        We can also do changes in list as well --->
               Example ---->
                            a = [1,2,4,56,6]
                            a[1] = 34
                            print(a[1])
                            o/p ---> 34

        What we can do with lists : 1) create lists with [] brackets.
                                    2) print the list using print() function. 
                                    3) Access using index using a[0] a[1] ....
                                    4) we can do changes in lists as well.
                                    5) we can create a list with items of different types.    



Lists Slicing :                                 0         1       2       3    4    --------> indices
                Example -------->> friends = ["Piyush","Herik","Pawan","vinit",45]  
                                   print(friends[0:2])
                                   o/p -----> ['Piyush','Herik']                                                           
                    
'''
# ====================================================================================================================================
a = [1, 2, 4, 56, 6]
print("Zero index    : ", a[0])
print("First index   : ", a[1])
print("Second index  : ", a[2])
print("Third index   : ", a[3])
print("Fourth index  : ", a[4])
# print("Fifth index   : ", a[5])    # -------------->>     print("Fifth index  : ",a[5])  --->>  IndexError: list index out of range
# -------------------------------------------------------------------------------------------------------------------------------------

# Changing the list items :
a = [1, 2, 4, 56, 6]
a[1] = 34
print(a[1])

# -------------------------------------------------------------------------------------------------------------------------------------
print(" ")
# 5) we can create a list with items of different types :
different_Types = [1, "Piyush", 7.8889, True]
print(different_Types[0])  # ----------->> integer type item
print(different_Types[1])  # ----------->> String type item
print(different_Types[2])  # ----------->> Float type item
print(different_Types[3])  # ----------->> Boolean type item

# -------------------------------------------------------------------------------------------------------------------------------------
print(" ")
# Lists Slicing :
friends = ["Piyush", "Herik", "Pawan", "vinit", 45]
print(friends[0:2])
# negative slicing :
print(friends[-3:-1])  # [start : end]

print(friends[2:])
print(friends[:-2])