'''
Other Dunder Methods :
__str__() ---> used to set gets display upon calling str(obj)
__len__() ---> Used to set what gets displayed upon calling __len__() or len(obj)
'''
class Number:
    def __init__(self,num):
        self.num=num

n = Number(7)    
print(n)  

# -------------------------
class Number:
    def __init__(self,num):
        self.num=num

    def __str__(self):
        return f'Decimal Number : {self.num}'

    def __len__(self):
        return self.num.__len__()    

n = Number("piyush")    
print(n)  
print(len(n))



# Example :
class ClassName:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return self.name

    def __len__(self):
        return len(self.name)

    def __eq__(self, other):
        if self.name == other.name:
            return f"{self.name} > Yes"
        else:
            return "No"

c = ClassName("Piyush")
print(c)  # OR print(str(c))
print(str(c))
print(len(c))
print(c == ClassName("Piyush"))  # Use the equality operator
