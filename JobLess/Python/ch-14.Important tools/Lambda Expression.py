# Lambda Expressions (anonymous Function) : The function with no name is called anonymous function

# Without Lambda Function :
def sum(a,b):
    return a+b
print(sum(2, 3))    

# Now Using Lambda Expression :
sum = lambda a,b: a+b
print(sum(1,2))

#-------------------------------------------------------------------

x=lambda a:a+10
print(x(5))

x=lambda a,b:a*b
print(x(5,6))

x=lambda a,b,c:a+b+c
print(x(5,6,2))


# Note : We Use Lambda Expression with Filer,Map,Reduce

multiply = lambda x,y:x*y
print(multiply(1,2))  


# Anonymous Function inside a function :
def add(a):
    return lambda b: a+b
A = add(2)    
print(A(2))


# Differenec Between def and Lambda Expression :
def square(n):
    return n**2
print(square(6))


square = lambda n: n**2
print(square(4))