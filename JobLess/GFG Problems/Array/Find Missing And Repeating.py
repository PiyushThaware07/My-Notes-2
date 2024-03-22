a = [1,3,3]
# Repeating
for i in range(1,len(a)):
    for j in range(i,len(a)):
        if a[i]==a[j] and i not in a:
            repeating = a[i]
            missing = i
print(repeating,missing)