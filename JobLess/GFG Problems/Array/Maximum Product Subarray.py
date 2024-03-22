a = [6,-3,-10,0,2]
n = len(a)
for i in range(0,n):
    mul = 1
    for j in range(i+1,n):
        for k in range(j+1,n):
            if a[i]*a[j]*a[k]>mul:
                mul=a[i]*a[j]*a[k]
            mul = mul+1
print(mul)