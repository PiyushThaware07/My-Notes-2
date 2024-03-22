# Multiple Inheritance ---------> Two or more parent : or single child
class Father:
    work = 'Employee'
    salary = '50k'

    @staticmethod
    def detail1():
        print('I am Parent1')

class Mother:
    work = 'HouseWife'
    salary = 4000

class Child(Father,Mother):
    work = 'Studing'

    @staticmethod
    def phoneNo():
        print('Phone no is +91988776655')
c = Child()
print(c.salary)
print(c.work)
c.detail1()  
c.phoneNo()  


# -------------------------------------------
class Father:
    work = 'Employee'
    salary = '50k'

    @staticmethod
    def detail1():
        print('I am Parent1')

class Mother:
    work = 'HouseWife'
    salary = 4000

class Child(Mother,Father): # Jo pahele likha hoga vo chalega print() hoga
    work = 'Studing'

    @staticmethod
    def phoneNo():
        print('Phone no is +91988776655')
c = Child()
print(c.salary)
print(c.work)
c.detail1()  
c.phoneNo()  