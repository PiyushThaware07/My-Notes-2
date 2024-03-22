friends = ['Punit','Herik','Pawan','Sharique','Vinit']
a = "--".join(friends)
b = "!!".join(friends)
c = " is a friend of ".join(friends)
print(a)
print(b)
print(c)
'''
o/p : 
Punit--Herik--Pawan--Sharique--Vinit
Punit!!Herik!!Pawan!!Sharique!!Vinit
Punit is a friend of Herik is a friend of Pawan is a friend of Sharique is a friend of Vinit
'''

l = ['apple','mango','banana','cherry']
d = " and ".join(l)
print(d)
# o/p : apple and mango and banana and cherry