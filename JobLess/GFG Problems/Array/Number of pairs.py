# Logic - 1
x = [2,1,6]
y = [0,1,5]
ans = 0
for i in range(len(x)):
    for j in range(len(y)):
        if (pow(x[i], y[j]) > pow(y[j], x[i])):
            ans+=1
print(ans)

