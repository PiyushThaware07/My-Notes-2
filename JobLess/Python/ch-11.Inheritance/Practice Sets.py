'''
Question : 1) create a class c-2d vector and use it to create another class representing a 3-d vector :
'''
from operator import ne


class TwoDimensionVector:
    def __init__(self,i,j):
        self.icap = i
        self.jcap = j

    def __str__(self):
        return f"{self.icap}i + {self.jcap}j"    
class ThreeDimensionVector(TwoDimensionVector):
    def __init__(self,i,j,k):
        super().__init__(i,j)
        self.kcap = k

    def __str__(self):
        return f"{self.icap}i + {self.jcap}j + {self.kcap}k"

d2v = TwoDimensionVector(2,3)
d3v = ThreeDimensionVector(4,5,6)
print(d2v)
print(d3v)

#============================================================================================================
'''
Question : 2) create a class Pets from Animals and Further create class Dog from pets.Add method bark to class Dog.
'''
class Animals:
    AnimalType = "Mammal"
class Pets:
    Color = "White"
class Dog:
    @staticmethod
    def bark():
        print("Bow Bow")
d = Dog()
d.bark()


#============================================================================================================
'''
Question : 3) Create a class Employee and add Salary and Increment properties to it
              write a method salaryAfterIncrement method with a @property decorator with a 
              setter which changes the value of increment based on the salary ?
'''
class Employee:
    salary = 1000
    increment = 1.5

    @property
    def salaryAfterIncrement(self):
        return self.salary * self.increment

    @salaryAfterIncrement.setter
    def salaryAfterIncrement(self,sai):
        self.increment = sai/self.salary   
e = Employee()
print(e.salaryAfterIncrement)
print(e.increment)
e.salaryAfterIncrement = 2000
print(e.increment)


#============================================================================================================
'''
Question : 4) Write a class Complex to represent complex numbers along with overoaded operators + and *which adds 
and multiplies them ?
'''
class Complex:
    def __init__(self,r,i):
        self.real=r
        self.imaginary = i

    def __add__(self,c):
        # (a + bi)( c + di) 
        return Complex(self.real + c.real , self.imaginary + c.imaginary) 

    def __mul__(self,c):
           #      (ac-bd) + (ad+bc)i
        mulReal = self.real*c.real - self.imaginary* c.imaginary
        mulImg = self.real * c.imaginary - self.imaginary * c.real
        return Complex(mulReal,mulImg) 
    
    def __str__(self):
        if self.imaginary<0:
           return f"{self.real} - {-self.imaginary}i"
        else:
           return f"{self.real} + {self.imaginary}i"          
c1 = Complex(1,4)
c2 = Complex(8,5)
print(c1+c2)        
print(c1*c2)
# Formula : (a + bi)( c + di) = (ac-bd) + (ad+bc)i


#============================================================================================================
'''
Question : 5) Write a class vector representing a vector of n dimensions.overload the + and * operator
           which calculate the sum and the dot product of them ?
'''
class Vector:
    def __init__(self,vec):
        self.vec = vec
    def __str__(self):
        str1 = ""  #------------>> Blank String
        index = 0
        for i in self.vec:
            str1 += f" {i}a{index} +"
            index +=1
        return str1[:-1]

    def __add__(self,vec2):
        newList = []
        for i in range(len(self.vec)):
            newList.append(self.vec[i] + vec2.vec[i]) 
        return Vector(newList) 

    def __mul__(self,vec2):
        sum = 0
        for i in range(len(self.vec)):
            sum += self.vec[i] + vec2.vec[i]
        return sum           
v1 = Vector([1,4])
v2 = Vector([1,6])
print(v1+v2)        
print(v1*v2)

#============================================================================================================
'''
Question : 6) Write a __str__() method to print the vector as follows :
                        7i + 8j + 10k
'''
class Vector:
    def __init__(self,i,j,k):
        self.icap=i
        self.jcap=j
        self.kcap=k

    def __str__(self): 
         return f"{self.icap}i + {self.jcap}j + {self.kcap}k"   

v = Vector(7,8,10)
print(v)   


#============================================================================================================
'''
Question : 7) Override the __len__() method on Vector of Problem-5 to display the dimension of the Vector ?
'''
class Vector:
    def __init__(self,vec):
        self.vec = vec
    def __str__(self):
        str1 = ""  #------------>> Blank String
        index = 0
        for i in self.vec:
            str1 += f" {i}a{index} +"
            index +=1
        return str1[:-1]

    def __add__(self,vec2):
        newList = []
        for i in range(len(self.vec)):
            newList.append(self.vec[i] + vec2.vec[i]) 
        return Vector(newList) 

    def __mul__(self,vec2):
        sum = 0
        for i in range(len(self.vec)):
            sum += self.vec[i] + vec2.vec[i]
        return sum           

    def __len__(self):
        return len(self.vec)

v1 = Vector([1,4,6])
v2 = Vector([1,6,9])
print(v1+v2)        
print(v1*v2)
print(len(v1))
print(len(v2))