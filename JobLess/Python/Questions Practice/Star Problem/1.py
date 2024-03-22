n = 5
print("Pattern : 1")
for i in range(n):
    for j in range(n):
        print("*",end=" ")
    print("\n") 

print("Pattern : 2")   
for i in range(n):
    for j in range(i+1):
        print("*",end=" ")
    print("\n")  

print("Pattern : 3")  
for i in range(n):
    for j in range(i,n):
        print("*",end=" ")
    print("\n") 

print("Pattern : For Right Side Triangle")
for i in range(n):
    for j in range(i,n):
        print(" ",end=" ")
    for j in range(i+1):
        print("*",end=" ")
    print("\n")   

print("Pattern : Right Sided Triangle") 
for i in range(n):
    for j in range(i+1):
        print(" ",end=" ") 
    for j in range(i,n):
        print("*",end=" ")
    print("\n") 

print("Pattern : Hill Pattern")        
for i in range(n):
    for j in range(i,n):
        print(" ",end=" ")
    for j in range(i):
        print("*",end=" ")
    for j in range(i+1):
        print("*",end=" ")    
    print("\n")   
