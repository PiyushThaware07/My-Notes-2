'''
CHAPTER ---> 10 : Object Oriented Programming
solving the problems by creating the object is one of the most popular approaches in programming.This is called object oriented programming.
These concept focus on reuse of code again and again.Which is also implement of DRY principle : Do not repeat yourself.


Class : A class is a blueprint for creating the objects. or a template.
        Example : Exam form for 2nd year students
                  In this each student have to fill it own details
                  In this Exam form is template or student filling data in it means creating there own objects.

        Syntax :
        class Employee:
            methods/variable

        Note : class always follow or written in pascal law.Means first letter is capital.

Object : A object is instantiation of a class.when class is define a template (info) is define.Memory is allocated only after the object instantiation.
         Onject of given class can invoke the methods available to it without reveling the implementation of details to user : Abstraction  
         Encapsulation : raping the similar products or entities together.



 We Indentify the following in our pattern :
 Noun : Class ---> Employee
 Adjective : Attributes --> name , age , salary
 Varbs : Methods ----> getSalary() , increment()       
'''
# ========================================================================================================================================

class RailwayForm:
    formType = "RailwayForm"
    def printData(self):
        print(f"name is {self.name} , train is {self.train}")

piyushApplication = RailwayForm()
piyushApplication.name = "Piyush"
piyushApplication.train = "Rajdhani Express"
piyushApplication.printData()

# ---------------------------------------------------------------------------------------------
class Remote:
    pass

class Player:
    def moveLeft(self):
        pass
    def moveRight(self):
        pass
    def moveTop(self):
        pass
playerUnknown_name = Player()
remote_name = Remote()
if (remote_name.pressed()):
    playerUnknown_name.moveLeft
# ---------------------------------------------------------------------------------------------
'''
# Normal Flow of code :
a = 12
b = 34
print("The sum of a and b is :",a+b)


# Using class for above code :
class Number:
    def sum(self):     # function
        return self.a + self.b
num = Number()  # ---->> Object instantiation 
num.a = 12
num.b = 34
s = num.sum()  
print(s)    
'''
