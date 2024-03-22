'''
Class Attributes :
An Attributes that belongs to the class rather than a particular object. 
Example :
          class Employeee:
              company = "Google" ---> [specific to each class]

          harry = Employee()     ---> Object Instantiation
          harry.company
          Employee.company = "Youtube" ---> Changing the class attributes   
Note ---------> Koi bhi aysi baat jo sare employees se related ho same as CSS class       
'''
#==================================================================================
class Employee:
    company = "Google"
Harry = Employee()
print(Harry.company)   
Employee.company = "Youtube"
print(Harry.company)


Piyush = Employee()
print(Piyush.company)
Employee.company = "Facebook"  #---> for changing company we will target company class attribute
print(Piyush.company)

#==================================================================================
'''
Instance Attributes :
An attributes that belongs to the instance (objects) Assuming the class from the previous examples :

harry.name = "Harry"
harry.salary = "30K" ---> Adding instance attributes

Note : Instance attributes take preference over class attributes during assignment & retrival.
       
       harry.attribute1 = 1) Is attribute1 is present in object.
                          2) Is attribute1 is present in class.
'''
#===================================================================================
class Employee:
    company = "Google"
Piyush = Employee()     # -----------> Employee_1
Piyush.salary = 1000    # -----------> salary for every employee is different so it is same as CSS as target with id
print(Piyush.company)
print(Piyush.salary)    

Harry = Employee()       # -----------> Employee_2        # harry ek instance hai employee class ka hum n do ki salary fixed kar di
Harry.salary = 2000      # --------> Instance Attribute
print(Harry.company)     
print(Harry.salary)


print(" ")
# If there is class variable is also salary and instance variable is also salary then this happen 
class Employee:
    company = "Youtube"
    salary = 500
employee1 = Employee()
print(employee1.company)
employee1.salary = 1000
print(employee1.salary)    

# if there is no instance attribute then it will show class attribute :
class Employee:
    salary = 500
employee1 = Employee()
employee2 = Employee()
print(employee1.salary)  
print(employee2.salary) 