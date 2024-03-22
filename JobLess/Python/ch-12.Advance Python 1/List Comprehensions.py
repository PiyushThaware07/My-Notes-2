'''
for index,name in enumerate(names,start=5): : Elegent Way to create lists based on existing lists.

list1 = [1,7,12,11,22]
list2 = [i for item in list1 of item >8]
'''


# create l2 list which contain the sqaure of items of list l1 
list1 = [1,2,3,4,5,6]
list2 = []
for item in list1:
    list2.append(item*item)
print(list2)

# instead : of above code
list1 = [1,2,3,4,5,6]
list2 = [item*item for item in list1]
print(list2)
# o/p : [1, 4, 9, 16, 25, 36]

# Example - 2 
list1 = [1,2,3,4,5,6]
print(list1)
list2 = [item**3 for item in list1]
print(list2)
list3 = [item for item in list2 if item<100]
print(list3)