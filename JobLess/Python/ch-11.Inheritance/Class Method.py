'''
Class Method :
A class method is a method which is bound to the class and not to the object of a class.

Decorator used to declare is --> @classmethod
'''
class Employee:
    company = 'Google'
    salary = 100

    @classmethod
    def changeSalary(cls,sal):
        cls.salary = sal

    def chnageSalaryALPHA(self):
        print(f"new salary {self.salary}")

e1 = Employee()
print(e1.salary) 
e1.changeSalary(244)     
print(e1.salary)  