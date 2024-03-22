'''
Method Overriding : A method can have same name in both super class as well as child class
'''

class A:
    def m1(self):
        print('This is m1 of A')
class B(A):
    def m1(self):
        print('This is m1 of B')
b = B()
b.m1()
# O/p :
# This is m1 of B

'''
Using Super keyword we can access the Class A methods :
'''
class A:
    def m1(self):
        print('This is m1 of A')
class B(A):
    def m1(self):
        super().m1()
        print('This is m1 of B')
b = B()
b.m1()
# Output :
# This is m1 of A
# This is m1 of B


# ===================== ( Constructor Overriding ) =============================
class A:
    def __init__(self):
        print('This is Constructor of class A')
class B(A):
    def __init__(self):
        print('This is Constructor of class B')
b = B()
# o/p : This is Constructor of class B

# Now By using Super keyword :
class A:
    def __init__(self):
        print('This is Constructor of class A')
class B(A):
    def __init__(self):
        super().__init__()
        print('This is Constructor of class B')
b = B()
# o/p :
# This is Constructor of class A
# This is Constructor of class B