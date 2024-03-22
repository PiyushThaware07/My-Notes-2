# Logic
# a = [1,3,5,5,5,5,67,123,125]
a = [1,3,5,5,5,5,7,123,125]
n = len(a)
start_index = a.index(7)
for i in reversed(range(n)):
    if a[i]==7:
        end_index = i
        break
print(start_index,end_index)



# Code
def find(a,n,x):
    a.sort()
    if x not in a:
        start = -1
        end = -1
        return start,end
    else:
        start = a.index(x)
        end = n-1-a[::-1].index(x)
        return start,end
    
a = [1,3,5,5,5,5,7,123,125]
n = len(a)
x = 9
ans = find(a, n, x)
print(*ans)

# ------------ OR -----------------
def find(a,n,x):
    a.sort()
    if x not in a:
        start = -1
        end = -1
        return start,end
    else:
        start = a.index(x)
        for i in reversed(range(n)):
            if a[i]==x:
                end = i
                break
        return start,end
    
a = [1,3,5,5,5,5,7,123,125]
n = len(a)
x = 5
ans = find(a, n, x)
print(*ans)