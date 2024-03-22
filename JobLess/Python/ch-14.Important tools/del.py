'''
Del (Delete) --> This is used to delete elements or item.
'''
a = b = 2
print(a)
del a
print(a)
print(b)
'''
output :
2
NameError: name 'a' is not defined
''' 


# Deleting item of a list 
name = ['Piyush','Vinit','Sharique','Herik','Pawan']
print(name)
del name[2]
print(name)
'''
Output :
['Piyush', 'Vinit', 'Sharique', 'Herik', 'Pawan']
['Piyush', 'Vinit', 'Herik', 'Pawan']
'''
