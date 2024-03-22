'''
Assert : It is used for debugging purpose.
'''
a = 10
assert a<20

# We can also Provide a message in assert when error occurs 
a = 10
assert a<20, "The value of a is less than 20"
# o/p : AssertionError: The value of a is less than 5

# ----------------------------------------------------------------------
x = "hi"
# if condition returns true,then nothing happens
assert x == "hi"
# if condition returns false , Assertion Error Occurs
assert x == "Hello"

x = "hello"
# if condition returns false,Assertion Error is Occurs
assert x == "hi", "x should be 'hello" 