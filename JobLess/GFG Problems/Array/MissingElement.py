'''
n = 5
a = [1,2,3,5]
for i in range(1,n+1):
    if i not in a:
        missing = i
print(missing)
'''

# ----------------
def findMissing(array,n): 
    temp = [0]*(n+1) 
    for i in range(0,n): 
        temp[array[i]-1] = 1
    for i in range(0,n+1):
        if(temp[i] == 0):
            ans = i+1
    print(ans)
def main():
    array = [1,2,3,5]
    n = len(array)
    findMissing(array,n)
main()

    