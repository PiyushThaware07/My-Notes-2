# Approach - 1
arr = [1,5,3,0,4]
n = len(arr)
if n==1:
    print(0)
if arr[0]>=arr[1]:
    print(0)
if arr[n-1]>arr[n-2]: #4>3
    print(n-1)        # o/p = 4
for i in range(1,n-1):
    if arr[i]>=arr[i-1] and arr[i]>=arr[i+1]: #1>0 and 1>=2
        print(i)
    