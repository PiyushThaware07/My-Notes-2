array = [1,2,3,7,5]
size = len(array)

Sum = 12

for i in range(0,size):
    currentSum = array[i]
    j = i+1
    while j<=size:
        if currentSum==Sum:
            print(currentSum,i,j)
        if currentSum>Sum or j==size:
            break
        currentSum = currentSum+array[j]
        j+=1

    




    


