# a = [1,2,3,4,5]
# b = [1,2,3]
a = [1,1,1,1,1]
b = [2,2,2,2]
s1 = set(a)
s2 = set(b)
s = s1.union(s2)
t = []
for i in s:
    t.append(i)
t.sort()
print(t)