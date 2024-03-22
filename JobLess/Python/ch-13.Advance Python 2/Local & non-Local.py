# Local : local variable is define inside the function and its local scope is also inside the function.

def func():
    print(x)  #-----------> First this will check whether a local vaiable is available or not if yes the it will print else it will print global variable
x = "Global"
func()   
# output --> Global


x = "Global" 
def func():
    x = "Local"
    print(x)  #-----------> Here is now in the local scope local variable is available so it will print it.
func()
print(x)

#-------------------------------------------------------------------------------------------------------------
# if we try to do this then this will show error:
x = "Global" 
def func():
    print(x)  # ---------> UnboundLocalError: local variable 'x' referenced before assignment
    x = "Local"
    print(x)  
func()
print(x)

# to solve this error we do as follows :
x = "Global" 
def func():
    global x
    print("Inside a func :",x) 
    x = "Local"
    print("Inside a func :",x)  
func()
print("Outside a func :",x)

#=============================================================================================================

# non-Local : It is used inside the nested function : It will applicable inside the nested function only.

x = "global"
def outer_function():
    x = "Local"
    print(f"(1) inside Outer_function before going to inner Function ============ {x}")

    def inner_function():  
        nonlocal x
        x = "nonlocal"
        print(f"(2) inside inner_function ============ {x}")  
    inner_function()

    print(f"(3) inside Outer_function ============ {x}")

outer_function()  
print(f"(4) Outside Outer_function ============ {x}")      

'''
o/p :
(1) inside Outer_function before going to inner Function ============ Local
(2) inside inner_function ============ nonlocal
(3) inside Outer_function ============ nonlocal
(4) Outside Outer_function ============ global
'''








