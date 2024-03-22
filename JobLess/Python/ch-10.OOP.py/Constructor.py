'''
Constructor : __init__()
It is a special method which is first run as soon as object is created.

__init__() it is also known as constructor.
It take self Argument as well as futher more arguments

For Example : 
               class Employee:
                   def __init__(self,name):
                       self.name = name
                   def getSalary(self):
                       ...
                    harry = Employee("Harry")
                                        |
                                    object can be instantiated 
                                    using constructor like this.           
'''
#=================================================================

class Employee:
    company = "Google"
    def __init__(self):  #-------------------> Constructor
        print("Employee is created.")

    def getSalary(self):
        print(f"The Salary is {self.salary}")

    @staticmethod
    def greet(name):
        print(f"Good Moring {name}")

    @staticmethod
    def time():
        print("Now the time is 10pm")        

piyush = Employee() 
piyush.salary = 1000000
piyush.getSalary()
piyush.greet("Shreyash")
piyush.time()


# Example :
class Worker:
    def __init__(self,name,salary,submited_Projects):
        self.name = name
        self.salary = salary
        self.submited_Projects = submited_Projects
        print("Employee is created!")

    def getDetails(self):
        print(f"name of the employee is {self.name}")
        print(f"salary of the employee is {self.salary}")
        print(f"submited projects of the employee is {self.submited_Projects}")
jason = Worker("Piyush",30000,10)
jason.getDetails()
        