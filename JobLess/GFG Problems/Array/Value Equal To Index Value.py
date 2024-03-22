a = [15,2,45,12,7]
n = len(a)
temp = []

for i in range(0,n):
    if a[i]==i+1:
        temp.append(i+1)
print(temp)