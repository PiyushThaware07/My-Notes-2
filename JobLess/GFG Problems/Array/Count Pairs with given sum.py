# Approach 1
arr = [1,5,7,1]
N = len(arr)
K = 6
temp = []
for i in range(0,N):
    for j in range(i+1,N):
        result = arr[i]+arr[j]
        if result==K:
            temp.append(result)
        else:
            print("false")
print(temp.count(6))
        
# Approach 2
arr = [1,5,7,1]
N = len(arr)
K = 6
count = 0
for i in range(0,N):
    for j in range(i+1,N):
        if arr[i]+arr[j]==K:
            count = count+1
print(count)


# Approach 3
arr = [1,5,7,1]
N = len(arr)
K = 6
count = 0
for i in range(0,N-1):
    for j in range(i+1,N):
        if arr[i]+arr[j]==K:
            count = count+1
print(count)

# Approach -4
arr = [1,5,7,1]
sum = 6
n = len(arr)
m =[0]*50
print(m)
for i in range(0,n):            #    0      1      2     3
    m[arr[i]] = m[arr[i]]+1     # 0=0+1=1,5=0+1,7=0+1,1=1+1=2
    print(m[arr[i]])  
twice_count = 0
for i in range(0,n):
    twice_count += m[sum-arr[i]]
    if sum-arr[i] == arr[i]:
        twice_count-=1
print(int(twice_count/2))