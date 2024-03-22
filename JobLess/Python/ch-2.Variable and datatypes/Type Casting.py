# type() : use to check the type 
a = 10
print('Type of a is :',type(a))

b = 45.5433
print('Type of b is :',type(b))

c = True
print('Type of c is :',type(c))

d = "Piyush"
print('Type of d is :',type(d))


#  Type Casting : used to change type
print('\n\n\n\nType Casting : used to change type')
#  int -----> str
a = 10
print(type(a))
a = str(a)
print(type(a))

# int -----> float
b = 23.343
b = int(b)
print(type(b))
print(b)

# int -------> str
c = "121212"
c = int(c)
print(type(c))
print(c)


# ============================================================
e = None
print(e)
print(type(e))
'''
o/p :
None
<class 'NoneType'>
'''

# tuple --> List
f = (10,20,30)
f = list(f)
print(f,type(f))

# Converts a list of key-value pairs to a dictionary
myDictionary = dict([('first_name',"piyush"),('last_name',"thaware")]) 
print(myDictionary)