'''
Operator Overloading in python :
Operator in python can be overloaded using dunder methods 


This methods are called when the given operator is used in object.
'''
class Number:
    def __init__(self,num1):
        self.num1 = num1

    def __add__(self,num2):
        return f'Let Addition : {self.num1 + num2.num1}' 

    def __mul__(self,num2):
        return f'Let Multiply : {self.num1 * num2.num1}' 

    def __sub__(self,num2):
        return f'Let Subtract : {self.num1 - num2.num1}'

    def __truediv__(self,num2):
        return f'Let Divide : {self.num1 / num2.num1}'      

    def __floordiv__(self,num2):
        return f'Let Floor Division : {self.num1 // num2.num1}'
      

n1 = Number(4)
n2 = Number(2)

sum = n1+n2
print(sum)   

mul = n1*n2
print(mul)

sub = n1-n2
print(sub)

div = n1/n2
print(div) 

floordivision = n1//n2
print(floordivision)
