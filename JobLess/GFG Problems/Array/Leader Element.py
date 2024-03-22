# Approach - 1
a = [16,17,4,3,5,2]
size = len(a)
for i in range(0,size):
    for j in range(i+1,size):
        if a[i]<=a[j]:
            print(f"i={i}\tdata={a[i]}\tj={j}\tdata={a[j]}")
            break
    if j==size-1:
        print(a[i],end=" ")

# Approach - 2
a = [16,17,4,3,5,2]
size=len(a)
max_from_right = a[size-1]
print(max_from_right,end=" ")
for i in range(len(a)-2,-1,-1):
    if max_from_right<a[i]:
        print(a[i],end=" ")
        max_from_right = a[i]

# Approach - 3
#    0  1  2 3 4 5
a = [16,17,4,3,5,2]
size = len(a)
temp = []

temp.append(a[size-1])  #2,5,17
print(temp)
for i in range(size-2,-1,-1):     #43210
    if(a[i]>=temp[len(temp)-1]):  #4>=5 #3>=5 4>=5 17>5
        print(f'{a[i]}>={temp[len(temp)-1]}')
        temp.append(a[i])
temp.reverse()
print(temp)
    


