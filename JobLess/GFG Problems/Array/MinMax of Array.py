def getMinMax(a,n):
    a.sort()
    print(a)
    min = a[0]
    max = a[n-1]
    l = [min,max]
    print(l)
    return l

def main():
    print("Main Running")
    T = int(input("Enter loop size -->"))
    while(T>0):
        n = int(input("Enter the size of array -->"))
        a = [int(x) for x in input().strip().split()]
        product = getMinMax(a, n)
        print("Product Here :",product)
        print(product[0],end=" ")
        print(product[1])
        T = T-1

main()

'''
a = [1,4,56,16,0,3,2]
print(a)
a.sort()
print(a)
min = a[0]
max = a[len(a)-1]
print(min,max)
'''