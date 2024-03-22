a = [1,2,3,7,5]
sum = 12
n = len(a)
f = False
for i,iterateI in enumerate(range(1,n+1)):
    for j in range(i+1,n-1):
        for k,iterateK in range(j+1,n):
            if a[i]+a[j]+a[k]==sum:
                print(a[i],a[j],a[k]) 
                print(iterateI,iterateK)
                f = True
if f:
    print(1)
else:
    print(0)