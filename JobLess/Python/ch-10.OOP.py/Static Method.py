'''
Static Method : sometime we need a fucntion that doesn't uses the self paremeter we can define a static method like this :
                @staticmethod  ------------------> decorator to mark greet as a static method
                def greet():
                    print("Good Morning)


Note ---------> when we dont want to use self then we will use or declare  @staticmethod

Decorator : it is a function which modify the functions.
'''
#====================================================================================================

class Employee:
    company = "google"

    @staticmethod
    def greet():
        print("Good Morning Sir")  

Piyush = Employee()
Piyush.greet()
# Employee.greet(Piyush) Aapke es function ko ayse greet nahi karna hai ayse karna hai Piyush.greet()      

#====================================================================================================
'''
using once more argument with self
'''
class Employee:
    company = "google"
    def getSalary(self,signature):
        print(f"Salary of our employee is {self.salary} which belong to our company {self.company}\n{signature}")
Piyush = Employee()
Piyush.salary = 10000
Piyush.getSalary("Thanks!")


# Example :
class one:
    @staticmethod
    def sum(a,b,c):
        print("sum of a,b and c is :",a+b+c)

demo = one()
demo.sum(2,3,4)
       
