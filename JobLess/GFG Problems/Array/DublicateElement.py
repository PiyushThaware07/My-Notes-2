class Solution:
    def dublicate(self,arr,n):
        repeat = []
        arr.sort()
        for i in range(n):
            k = i+1
            for j in range(k,n):
                if arr[i]==arr[j] and arr[i] not in repeat:
                    repeat.append(arr[i])
        if repeat:
            return repeat
        else:
            repeat.append(-1)
            return repeat


arr = [2,33,1]
n = len(arr)
s = Solution().dublicate(arr, n)
for i in s:
    print(i,end=" ")

