#--------------------------------------------------( List Methods )-------------------------------------------------------------
'''
1) number.sort()    : It sort the list in proper order or in incresing order.
2) number.reverse() : It reverse the list.
3) number.append()  : Adding the new elements at the end of documents.
4) number.insert()  : This will add element enter by user or declare at the list index place.
5) number.pop()     : will delete element from list by given index.
6) number.remove(index)  : will remove element from list.
'''
#===============================================================================================================================

number = [1,2,4,5,87,43]
# 1) sort :
number.sort()
print("Sort list : ",number)

# 2) reverse :
number.reverse()
print("Reverse list : ",number)

# 3) append :
number.append(1006)
print("append list : ",number)

# 4) insert :
number.insert(3,66)  # (index , insert element)
print("insert element list : ",number)

# 5) pop :
number.pop(0)
print("delete element at 0 index from list : ",number) #---> 87 will delete

# 6) remove :
number.remove(43)
print("Remove 43 from the list : ",number)