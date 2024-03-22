# =============================== Chapter : 5 Sets ===================================
'''
Sets : sets in python is a collection of none repative items.
       
       Properties of Sets : 1) sets are unordered
                            2) sets are unindexed
                            3) there are no way to change the items in sets
                            4) sets cannot contain dublicate items.
'''
#=====================================================================================
a = {1, 3, 4, 5, 1}
print(type(a))
print(a)
# output : <class 'set'>   {1, 3, 4, 5} : 1 is missing

# -------------------------------------------------------------------------------------
print('')
a = {}             # ----------------->> This syntax is used to create empty dictionary
print(type(a))
# o/p ----> <class 'dict'>

# ------------------------------------------------------------------------------------
print("")
# This method is used to create empty set
b = set()
print(type(b))
# o/p -----> <class 'set'>

# or to add items in empty set
b.add(1)
b.add(5)
b.add((4,5,6)) # we can add tuples in sets
'''
b.add([2,5,6]) # we can not add list is set : TypeError: unhashable type: 'list' 
b.add({4:5})   # we can not add dictionary in set : it is also unhashable
'''
print(b)
# o/p ----> {1, 5, (4, 5, 6)}





#=========================================================================================
# Methods or Operations in Sets :
'''
1) b.add(value)          : add(4)
2) print(len(b))         : it tells the length of sets. which means how many items does it have.
3) b.remove(items name)  : used to remove items from sets
4) print(b.pop())        : used to remove item of sets randomly
5) b.clear()             : empty the sets and remove all elements.
6) b.union()             : returns the new set with all items from both sets
'''
#=========================================================================================
# 2) b.length()
print(len(b))

# 3) b.remove()
b.remove(5)
print(b)

# 3) b.pop()
print(b.pop())
print(b)

# 4) b.clear()
b.clear()
print(b)