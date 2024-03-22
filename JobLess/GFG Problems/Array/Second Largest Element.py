a = [64,64,64,64,78]
if len(a)==1:
    print(-1)
else:
    b = list(set(a))
    b.sort()
    if len(b)==1:
        print(-1)
    else:
        print(b[-2])
    
