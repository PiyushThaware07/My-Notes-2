'''
String Functions :
1. Length of string : len(name)
2. string.
2) Upper()
3) Lower()
4) startswith : name start with
5) endswith : name ends with
6) capatialize --------->> it makes first letter of word UPPERCASE
7) count
8) find
9) replace
10) index() : used to find the index of element.
'''

# 1) Length of String :
name = "ShreyaSh"
print(name)
print(len(name))

# 2) Upper() 
print(name.upper())

# 3) Lower()
print(name.lower())

# 4) startswith : name start with
print(name.startswith('P'))

# 5) endswith : name ends with
print(name.endswith('h'))

# 6) capatialize --------->> it makes first letter of word UPPERCASE
print(name.capitalize())

# 7) count 
print(name.count('S'))

# 8) find
print(name.find('S')) # it tell the index 

# 9) replace
print(name.replace('Sh', 'Pi'))

# 10) index() : used to find the index of element.
print(name.index('h'))


# 11) strip() : this will remove empty spaces from start and end of the string
name1 = "   Piyush     thaware   "
print(name1)