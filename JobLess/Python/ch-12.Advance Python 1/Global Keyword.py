'''
Global Keyword : It is used to modify the variables outside of the current scope.
'''
# without global
a = 10
def func():
    a = 8
    print(a)
    a = 100
    print(a)
print(a)
func() 
print(a)   

# With global :
a = 10
def func():
    global a
    a = 8
    print(a)
    a = 100
    print(a)
print(a)
func() 
print(a)
