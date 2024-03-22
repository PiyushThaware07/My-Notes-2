'''
Enumerate function in python :
The enumerate function adds counter to an iterable and returns it
 
for i,item in list1:
    print(i,item)
              |
            prints the items of list1 with index!   
'''
# ===============================================================
a = [1,2,5,6,0,10,'apple']
i=0
for item in a:
    i = i+1
    print(f"At Item number {i} Item is : {item}")


# Instead of doing it :
a = [1,2,5,6,0,10,'apple']
for i,item in enumerate(a):
    print(f"At Item number {i} Item is : {item}")

# for counter starts from 2 :
a = [1,2,5,6,0,10,'apple']
for i,item in enumerate(a):
    print(f"At Item number {i+2} Item is : {item}")    
