class Employee:
    company = 'Instagram'
    salary = 4000
    Bonus = 5000 
    totalSalary = salary + Bonus
e1 = Employee()
print(e1.totalSalary)    

'''    
Explanation : In future agar mein employee ki salary kam karta hu ya bonus nhi deta then ye dono chnage muje total mein bhi karna padega 
              so instead of doing this i was creating a property


@property : it is also called getter - which is used to get the value.   
syntax -
          @property
          def name(self)
              return self.Fname  
'''
class Employee:
    company = 'Snapchat'
    monthly_salary = 2000
    salary_bonus = 1000
    
    @property
    def total_salary(self):
        return self.monthly_salary+self.salary_bonus
    @total_salary.setter
    def total_salary(self,value):
        self.salary_bonus = self.monthly_salary-value    

e1 = Employee()
print('Total Salary :',e1.total_salary)

e1.total_salary = int(input('Enter the Total Salary :'))
print('Monthly :',e1.monthly_salary)
print('Bonus :',e1.salary_bonus)


# Example : increment in salary
class Worker:
    Monthly = 2000

    @property
    def getSalary(self):
        return self.Monthly

    @getSalary.setter
    def IncrementINsalary(self,rateOfIncrement):
        self.Monthly = self.Monthly+self.Monthly*rateOfIncrement   
          
w1 = Worker()
print(w1.getSalary)
w1.IncrementINsalary = float(input('Enter the increment rate of salary :'))
print(w1.getSalary)


'''
Setter : setter is used to set the value.
syntax - 
          @name.setter  --------------------> Decorator used to set
          def newName(self,value):
              self.Fname = value
'''

# Example -
class Sample:
    name1 = 'Piyush'
    @property
    def old_name(self):
        return self.name1

    @old_name.setter
    def new_name(self,name2):
        self.name1 = name2
s = Sample()
print(s.old_name)
s.new_name = 'Shreyash'
print(s.old_name)         


# Best Example :
class Student:
    school = "Vidya Niketan Convent"

    @property
    def details(self):
        return self.school

    @details.setter
    def updatedetails(self,college):
        self.school = college    
s1 = Student()
print(f"Past : {s1.details}")     

# Updating
s1.updatedetails = "K.D.K College of Engineering"
print(f"Present : {s1.details}")


# Exmaple :
class Employee:
    salary = 1000
    name = "default name"

    @property # getter 
    def getName(self):
        return self.name

    @getName.setter # setter
    def setName(self,newName):
        self.name = newName

e1 =  Employee()
print(f"Initial Name : {e1.getName}")
e1.setName = "Piyush"
print(f"Final Name : {e1.getName}")

