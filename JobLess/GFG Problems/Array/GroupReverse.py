# Approach 1
arr = [1,2,3,4,5]
N = len(arr)
K = 3
temp = []
temp1 = []
for i in range(N):
    if i<K:
        temp.append(arr[i])
    else:
        temp1.append(arr[i])
temp.reverse()
temp1.reverse()
result = temp+temp1
print(result)


# Approach 2
arr = [1,2,3,4,5]
N = len(arr)
K = 3
for i in range(0,N,K):
    if i>N-K:   # 3,4
        arr[i:]=reversed(arr[i:])
        print(arr[i:])
    else:
        arr[i:i+K]=reversed(arr[i:i+K])
print(arr)