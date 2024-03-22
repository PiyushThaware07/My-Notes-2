arr = [3,9,12,16,20]
n = len(arr)
k = 3
# Sort an array
arr.sort()

tempMin=arr[0]
tempMax=arr[n-1]

ans = tempMax-tempMin

for i in range(1,n):
    if arr[i]<k:
        continue
    tempMin = min(arr[0]+k, arr[i]+k)     # 6<12,6<15,6<19,6<23
    # print("min",f"{arr[0]+k}\t{arr[i]+k}")
    tempMax = max(arr[i-1]+k, arr[n-1]-k) # 6<17,12<17,15<17,19>17
    # print("max",f"{arr[i-1]+k}\t{arr[n-1]-k}")
    ans = min(ans,tempMax-tempMin)
print(ans)



