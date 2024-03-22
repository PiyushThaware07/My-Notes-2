a = [1,2,3,7,5]
s = 12
n = len(a)
# a = [1,2,3,4,5,6,7,8,9,10]
# s = 15
csum = 0
for ele,i in enumerate(range(1,n+1)):
    csum += a[ele]
    lp = 0
    if csum>s:
        csum = csum-a[lp]
    lp +=1
    if csum==s:
        print(f"at lp index = {lp} the data is {a[lp]}\nat ele index = {ele} the data is {a[ele]}")
        break








