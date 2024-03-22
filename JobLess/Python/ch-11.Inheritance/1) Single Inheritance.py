# Single Inheritance ----------> from one "Parent" ----> There is only one "Child"
class Parent:
    company = 'Google'
    salary = 1000

    def details(self):
        print(f'This is Parent')
class Child(Parent):   #---> Parent ko child mein inherit kiya
    company = 'Amazon'

c = Child()
print(c.company)
print(c.salary)
c.details()