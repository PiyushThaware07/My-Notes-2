'''
Self : self refers to the instance of the class . It is automatically passed with a function call from object.
       
       harry.getSalary()  ---> here self is harry
       Employee.getSalary(harry)
       o/p : its salary

       The function getSalary is define as :
       class Employee:
           company = "Microsoft"
           def getSalary(self):
               print("Salary is not there")
'''
#====================================================================================================
class Employee:
    company = "Microsoft"
    def getSalary(self):  # without self show errors
        print("Salary is 100k")
employee1 = Employee()
employee1.getSalary() 
Employee.getSalary(employee1)  

# using self we can use both attributes class as well as Instance attributes.
class Employee:
    company = "Microsoft"
    def getSalary(self):  # without self show errors
        print(f"Salary is {self.salary} for employee1 working in company is {self.company}")
employee1 = Employee()
employee1.salary = 100000
employee1.getSalary() # this is same as Employee.getSalary(employee1)  