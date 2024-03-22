a = [0,0,0,0,1,1]
n =len(a)
f = False
for i in range(0,n):
    if a[i]==1:
        f = True
        break
if f:
    print("yes",i)
else:
    print("no")