a = [1,2,3,4,5]
# o/p = [5,1,2,3,4]
size = len(a)
no_of_element_to_be_move = size-1
for i in range(no_of_element_to_be_move):
    temp = a[0]
    for j in range(size-1):
        a[j]=a[j+1]
    a[size-1]=temp
print(a)
