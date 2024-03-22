'''
Recursion : The fuction which call itself is called recursion
'''
# Factorial : n! = 1*2*3*....n
n = 4 
product = 1
for i in range(n):
    product = product*(i+1)
print(product)    
'''
Summary :
    i=0  p=1*(0+1)=1
    i=1  p=1*(1+1)=2
    i=2  p=2*(3)=6
    i=3  p=6*(4)=24    
'''

# Without Recursion :
def factorial_Iter(n):
    product = 1
    for i in range(n):
       product = product*(i+1)
    return product 
print(factorial_Iter(4)) 

# With Recursion :
# n! = (n-1)*n
def factorial_Recursion(n):
    if n==1 or n==0:
        return 1
    else:    
       return (n-1)*n
print(factorial_Recursion(1))    
