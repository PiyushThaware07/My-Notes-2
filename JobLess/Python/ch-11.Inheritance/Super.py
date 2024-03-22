'''
Super() : This method is used to access the method of super class (ie Parent class) in the derive class
'''
class GrandFather:
    country = 'India'

    def Age(self):
        print('GrandFather Age is : 69')

class Father(GrandFather):
    company = 'Google'
    country = 'Japan'

    def Age(self):
        super().Age()
        print('Father Age is : 29')

    def getSalary(self):
        print(f'Salary of Father is : {self.salary}') 

class Child(Father):
    company = 'Youtube'

    @staticmethod
    def work():
        print('I am studying')

f = Father()
f.Age()
print(f.country)



# Example -
class Number1:
    def square(self):
        print(f'The square of number is : {self.num1**2}')
class Number2(Number1):        
    def add(self):
        super().square()
        print(f'The sum of two number is : {self.num1+self.num2}')
n = Number2()
n.num1 = 10
n.num2 = 15
n.add()        



#  Super in Constructor :
class Number1:
    def __init__(self,a):
        self.a = a
    def cube(self):
        print(f'Cube of a is : {self.a**3}')

class Number2(Number1):
    def __init__(self,a,b):
        super().__init__(a)
        self.b = b
    def multiplication(self):
        print(f'Multiplication of a and b is : {self.a*self.b}')   

class Number3(Number2):
    def __init__(self,a,b,c):
        super().__init__(a,b)
        self.c = c
    def Add(self):
        print(f'Addition of three numbers is : {self.a +self.b +self.c}')                 
n2 = Number3(2, 2,2)
n2.cube()
n2.multiplication()
n2.Add()

