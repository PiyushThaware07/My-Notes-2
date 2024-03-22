a = [89,24,75,11,23]
b = [89,2,4,75]
set1 = set(a)
set2 = set(b)
count = 0
for i in set1:
    if i in set2:
        count+=1
print(count)