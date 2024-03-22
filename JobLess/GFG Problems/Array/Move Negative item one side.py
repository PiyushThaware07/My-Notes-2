# a = [1,-1,3,2,-7,-5,11,6]
# a = [-5,7,-3,-4,9,10,-1,11]
a = [-6,-8,2,-8]
b = []
for i in a:
    if i<0:
        b.append(i)
print(b,type(b))

for i in b:
    a.remove(i)
print(a,type(a))

s = a+b
print(s)


a = [1,-1,3,2,-7,-5,11,6]
b = []
for i in a:
    if i>=0:
        b.append(i)  
else:
    for i in a:
        if i<0:
            b.append(i)
print(b)