# Logic
a = [1,2,3,4,5]
n = len(a)
min = a[0]
max = a[n-1]
b = [min,max]
for i in a:
    if i in b:
        a.remove(i)
print(a)
print(b)

# Problem
a = [1,2,3,4,5,6]
# a = [1969,2677,3142,4631,4764,5748,6476,6487]
n = len(a)
l = 0
h = n-1
temp = []
while(l<=h):
    temp.append(a[h])
    temp.append(a[l])
    l+=1
    h-=1

print(temp)
for i in range(n):
    a[i]=temp[i]
print(a)

    