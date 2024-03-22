# Multilevel Inheritance : when a child class became parent class for another child class.
class GrandFather:
    country = 'India'

    def Age(self):
        print('GrandFather Age is : 69')

class Father(GrandFather):
    company = 'Google'
    country = 'Japan'

    def getSalary(self):
        print(f'Salary of Father is : {self.salary}') 

class Child(Father):
    company = 'Youtube'

    @staticmethod
    def work():
        print('I am studying')

# Creating Objects : for GrandFather
gf = GrandFather()
print(gf.country)
gf.Age()
# print(gf.company) : AttributeError: 'GrandFather' object has no attribute 'company'

# =========================================
# Creating Objects : for Father
f = Father()
print(f.country)
print(f.company)
f.salary = 20000
f.getSalary()
f.Age()

# =========================================
# Creating Objects : for child
obj = Child()
print(obj.company)
obj.work()

print(obj.country) # Japan --> Father
obj.salary = 2000
obj.getSalary()  #----> Father

obj.Age()




