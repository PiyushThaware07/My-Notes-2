'''
Frozen Set : Collection of non-repetative elements is called set or frozen set.

IMP - It can't hold dublicate elements 
      where set is mulatble but frozen set is immutable
'''
s = {10,20,30,40,50}
f = frozenset(s)
# f.add(60)   # AttributeError: 'frozenset' object has no attribute 'add','pop' i.e once the frozen set is create we cant add or remive the items in it.)


name = {'Piyush',"Pawan",'Vinit','Herik'}
f = frozenset(name)
print(type(f)) # <class 'frozenset'>
f[1] = "Jason" #TypeError: 'frozenset' object does not support item assignment
print(f[1])