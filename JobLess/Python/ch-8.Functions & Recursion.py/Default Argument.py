'''
Default Parameter Value :
we can have a value as default argument in a function.
If we specify name="Strager" in the line containing def,this value is used when no argument passed in it.
Example :
        def greet(name="Shreyash"):
        print("Good Day,"+name)
        greet() 

        o/p : Good Day,Shreyash
'''
#========================================================================================================
def greet(name):
    print("Good Day,"+name)
greet("Piyush") 

# Default Parameter Value
# greet() # --> Error occurs

def greet(name="Shreyash"):
    print("Good Day,"+name)
greet() 