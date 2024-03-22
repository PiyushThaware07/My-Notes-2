'''
Operator :
types -
1) Arithmetic Operator ------------> + - / * ++ -- **
2) Assignment Operator ------------> = 
3) Comparision Operator -----------> == , >= <= , !=
4) Logical Operator ---------------> and , or , not
'''

#  1) Arithmetic Operator :
a = 10
b = 15
print("The sum of a and b is ", a+b)
print("The sub of a and b is ", a-b)
print("The mul of a and b is ", a*b)
print("The div of a and b is ", a/b)

#  2) Assignment Operator :
a = 10  # value assign a = 10
print('Assignment Operator :',a)

#  3) Compression Operator :
a = (10>12)
print(a)

b = (20<12)
print(b)

c = (10==10)
print(c)

d = (10!=12)
print(d)

#  4) Logical Operator :
bool1 = True
bool2 = False
#  and
print("The value of bool1 and bool2 is : ", (bool1 and bool2))

#  or
print("The value of bool1 or bool2 is : ", (bool1 or bool2))

#  not
print("The value of not bool1 is : ", (not bool1))
print("The value of not bool2 is : ", (not bool2))