a = [-3, -1, 0, 1, 2]
n = len(a)
f = False
for i in range(0,n-2):
    for j in range(i+1,n-1):
        for k in range(j+1,n):
            if a[i]+a[j]+a[k]==0:
                f = True
if f:
    print(1)
else:
    print(0)