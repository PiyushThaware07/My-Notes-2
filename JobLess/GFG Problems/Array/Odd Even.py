a = [1,2,3,4,5]
even = 0
odd = 0
for i in a:
    if i%2==0:
        even+=1
    else:
        odd+=1
print(even,odd)