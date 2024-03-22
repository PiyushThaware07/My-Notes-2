# Method overloading is not possible in python
class Student:
    def m1(self, name):
        print("Name", name)

    def m1(self, a, b):
        sum = a + b
        print("summation", sum)


std = Student()
std.m1("Nikhil")  # ----->> gives error
std.m1(10, 20)

# ---------------------------------------------------------------------------------------------------------------------
# Example :
class Test:
    def m1(self,i):
        print(i)
t = Test()
t.m1(10)
t.m1('Nikhil')
t.m1(10.5)
t.m1(10+20j)
t.m1("Nikhil",10)  # error

# ---------------------------------------------------------------------------------------------------------------------
# Example :
class Test:
    def sum(self,a=None,b=None,c=None):
        if(a!=None and b!=None and c!=None):
            print("The sum of 3 Number is :",a+b+c)

        elif(a!=None and b!= None):
            print("The sum of 2 Number is :", a + b)

        else:
            print("Please Provide 2 or 3 arguments")

t = Test()
t.sum(10,20,30)
t.sum(10,20)
t.sum(10)

# ---------------------------------------------------------------------------------------------------------------------
class Test:
    def __init__(self):
        print("No arg Constructor")

    def __init__(self, a):
        print("One arg Constructor")

    def __init__(self, a, b):
        print("Two arg Constructor")


t = Test(10)


# Error Occurs : Two arguments were missing.

# ---------------------------------------------------------------------------------------------------------------------
class Test:
    def __init__(self, a=None, b=None, c=None):
        print('Constructor with 0/1/2/3 arguments.')


t = Test()
t = Test(10)
t = Test(10, 20)
t = Test(10, 20, 30)

# ---------------------------------------------------------------------------------------------------------------------
# Example 2 :
class Test:
    def __init__(self, *a):
        print('Constructor with any number of arguments.')
t = Test()
t = Test(10)
t = Test(10, 20)
t = Test(10, 20, 30)
t = Test(10, 20, 30,40,50,60,70,80,90)


# ---------------------------------------------------------------------------------------------------------------------
# Method Overriding
class Parent:
    def Property(self):
        print('cash+gold+power')

    def Marry(self):
        print("Hi")


class Child(Parent):
    def Marry(self):
        super().Marry()
        print("Hello")


child = Child()
child.Property()
child.Marry()
