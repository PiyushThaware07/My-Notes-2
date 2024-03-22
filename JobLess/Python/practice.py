''' ----------------------- ( String ) ----------------------- '''
print("----------------------- ( String ) -----------------------")
string = "My name is Piyush    "
print(f">> Uppercase : {string.upper()}")
print(f">> Lowercase : {string.lower()}")
print(f">> Capitalize : {string.capitalize()}")
print(f">> Length : {len(string)}")
print(f">> Index : {string[3]}")
print(f">> Replace : {string.replace('Pi','A')}")
print(f">> StartsWith : {string.startswith('P')}")
print(f">> EndsWith : {string.endswith('P')}")
print(f">> Count : {string.count('P')}")
print(f">> Find : {string.find('P')}")
print(f">> Split : {string.split(',')}")
print(f">> Strip : {string.strip(' ')}")
print(f">> Slice : {string[3:7]}")
print(f">> Slice : {string[:7:2]}")


''' ----------------------- ( Builtin Datastructure ) ----------------------- '''
print("----------------------- ( Builtin Datastructure ) -----------------------")
print(">> 1. List --------------------------------------------------------------")
l1 = [1,2,3,4,5]
print(type(l1),l1)
empty_list = []
print(type(empty_list),empty_list)
listwithsingleelement = [1]
print(type(listwithsingleelement),listwithsingleelement)
l1[2]=10000
print(l1)
# & OPERATIONS ON LIST
l1.reverse()
print(f"1.Reverse : {l1}")
l1.sort()
print(f"2.Sort : {l1}")
l1.pop()
print(f"3.Pop : {l1}")
l1.append(2000)
print(f"4.Append : {l1}")
l1.remove(4)
print(f"5.Remove : {l1}")
print(f"6.Slice : {l1[1:3]}")



print(">> 2. Tuple ------------------------------------------------------------")
t1 = (1,2,3,2,1)
print(type(t1),t1)
emptyTuple = ()
print(type(emptyTuple),emptyTuple)
singleElementInTuple = (1,)
print(type(singleElementInTuple),singleElementInTuple)
# & OPERATIONS ON TUPLE
print(t1.count(1))
print(t1.index(3))


print(">> 3. Dictionary -------------------------------------------------------")
dict1 = {
    "fname":"Piyush",
    "lname":"Thaware",
    "age":23,
    "email":"Piyush@gmail.com"
}
print(dict1,type(dict1))
emptyDict = {}
print(emptyDict,type(emptyDict))
dict1["age"] = 33
print(dict1)
print(dict1["fname"])
# & OPERATIONS ON DICTIONARY
print(f"1. Key Method : {dict1.keys()}")
print(f"2. Values Method : {dict1.values()}")
print(f"3. Items Method : {dict1.items()}")
print(f"4. Get Method : {dict1.get('email')}")
dict1.update({'email':'testing@gmail.com'})
print(f"5. Update Method : {dict1}")
dict1.clear()
print(f"6. Clear Method : {dict1}")
# print(f"7. Difference Between Get Method and data fetching : {dict1['sample']}")


print(">> 4. Set -------------------------------------------------------")
s1 = {1,2,3,2,1}
print(s1,type(s1))
# List -> Set
l2 = [1,2,3,5]
s2 = set(l2)
print(s2)
# Tuple -> Set
t2 = (1,2,3,4,3,2)
s2 = set(t2)
print(s2)
# Empty set
emptySet = {}
print(type(emptySet),emptySet)
# & OPERATIONS ON SET
s1 = {1,2,3}
s2 = {2,3,1,4,5,6,8}
print(f">> 1.Union : {s1.union(s2)}")
print(f">> 2.Intersection : {s1.intersection(s2)}")
print(f">> 3.Difference : {s1.difference(s2)}")
print(f">> 4.Comparision : {s1==s2}")
s1.clear()
print(f">> 5.Clear : {s1}")
s2.add(10)
print(f">> 6.Add : {s2}")
s2.pop()
print(f">> 7.Pop : {s2}")
s2.remove(3)
print(f">> 8.Remove : {s2}")




''' ----------------------- ( Is & In ) ----------------------- '''
print("----------------------- ( Is & In ) -----------------------")
# 1. Membership
print("1.Membership ----------------------------------------------")
names = ["Piyush","Shreyash","Punit","Herik","Json"]
if "Herik" in names:
    print("Yes")
else:
    print("No")

# 2.Iterating Over Itrables
print("2.Iterating Over Itrables ----------------------------------------------")
for letter in "Hello World":
    print(letter)



''' ----------------------- ( Conditionals ) ----------------------- '''
print("----------------------- ( Conditionals ) -----------------------")
# age = int(input("Enter the age : "))
age = 0
if(age == 0):
    print("Just Born")
elif age==18:
    print("You are adult now")
elif age ==20:
    print("Its time to study")
elif age == 25:
    print("Take a job")
else:
    print("please enter a valid input")





''' ----------------------- ( Looping ) ----------------------- '''
print("----------------------- ( Looping ) -----------------------")
# 1. While Loop
print("1.While Loop")
i = 5
while i<10:
    print(i,end=" ")
    i = i+1
print("\n")

# 2. For Loop
print("2.For Loop")
for i in range(10):
    print(i,end=" ")
print("\n")




''' ----------------------- ( Break & Continue ) ----------------------- '''
print("----------------------- ( Break & Continue ) -----------------------")
for i in range(2,10):
    print(i,end=" ")
    if i==5:
        print("BREAK")
        break

for i in range(2,10):
    print(i,end=" ")
    if i==5:
        print("CONTINUE",end=" ")
        continue
print("\n")


''' ----------------------- ( Range ) ----------------------- '''
print("----------------------- ( Range ) -----------------------")
for i in range(11,25,2):
    print(i,end="~")
print("\n")



''' ----------------------- ( Function ) ----------------------- '''
print("----------------------- ( Function ) -----------------------")
# 1. Simple Function
def greet():
    print("Hello World")
greet()

# 2. Function With Arguments
def greet1(name):
    print(name)
greet1("sahil Thaware")

# 3. Function With Default Arguments
def greet2(name="default name"):
    print(name)
greet2()






''' ----------------------- ( OOP's ) ----------------------- 
1. Class : It is a blueprint or template for creating objects
2. Objects : Objects are the instance if class they are the real time entities
'''
print("----------------------- ( OOP's ) -----------------------")
class Employee():
    # Constructor : It will run as soon as the object of class created
    def __init__(self,firstName,lastName):
        self.firstName = firstName
        self.lastName = lastName
        print("I am employee class construcotr",self.firstName,self.lastName)

    def showRecords(self):
        print(self.firstName,self.lastName)
    
    # Class Attribute : Belog to specific class
    company = "Google"
    # Method Declaration
    def showDetails(self,age):
        print(f"Company : {self.company}\t \\Full Name : {self.fname} {self.lname},age:{age}")
    
    # Static Method : We can define method without the self parameter in it.
    @staticmethod
    def StaticData():
        print(f"I am static method")

    # Class Method : Method that bounds the the class not to the object of a class
    @classmethod
    def ClassData(self):
        print("I am classMethod")

e1 = Employee("Pankaj","Sharma")
print(e1.company) # Accessing Class Attributes
e1.company = "Microsoft" # Modifying Class Attributes

# Instance Attribute 
e1.salary = 10000
print(e1.company)
print(e1.salary)
e1.fname = "Ronak"
e1.lname = "Sharma"
e1.showDetails(18)
e1.showRecords()
e1.StaticData()
Employee.ClassData()




''' ----------------------- ( Inheritance ) ----------------------- '''
print("----------------------- ( Inheritance ) -----------------------")
class Father:
    age = 34
    status = "married"
class Son(Father):
    age =20
s1 = Son()
print(s1.age)
print(s1.status)




''' ----------------------- ( Getter & Setter ) ----------------------- '''
print("----------------------- ( Getter & Setter ) -----------------------")
class Student:
    def __init__(self):
        self._salary = 0  # Initialize salary to avoid AttributeError
    
    @property
    def getSalary(self):
        return self._salary
    
    @getSalary.setter
    def setSalary(self, newSalary):
        self._salary = newSalary

s1 = Student()
s1.setSalary = 100000  # Use property assignment, not method call
print(s1.getSalary)  # Removed parentheses when calling the property




''' ----------------------- ( Try , Except & Finally ) ----------------------- '''
print("----------------------- ( Try , Except & Finally ) -----------------------")
a = 17
try:
    if a>18:
        raise Exception("value of a is grater than 18")
    else:
        print("Try run successfully")
except ZeroDivisionError:
    print("ZeroDivisionError")
except Exception as e:
    print("Error : ",e)
else:
    print("I am Else")
finally:
    print("I am Finally")



''' ----------------------- ( Enumerate ) ----------------------- '''
print("----------------------- ( Enumerate ) -----------------------")
numbers = [10,20,30,40,50]
for index,number in enumerate(numbers):
    print(f"At index {index} the number present is {number}")



''' ----------------------- ( List Comprehension ) ----------------------- '''
print("----------------------- ( List Comprehension ) -----------------------")
l1 = [10,20,30,40,50]
l2 = [item*item for item in l1]
print(l2,type(l2))
l3 = (x for x in range(5))
print(l3, type(l3))




''' ----------------------- ( Scopes ) ----------------------- '''
print("----------------------- ( Scopes ) -----------------------")
scope = "GLOBAL"
def outerFunction():
    scope = "LOCAL"
    print(f"Inside outerFunction : {scope}")

    def innerFunction():
        nonlocal scope
        scope = "NON LOCAL"
        print(f"Inside innerFunction : {scope}")
    print(f"Outside innerFunction : {scope}")


print(f"Before : {scope}")
outerFunction()
print(f"After : {scope}")




''' ----------------------- ( Map , Filter & Reduce ) ----------------------- '''
print("----------------------- ( Map , Filter & Reduce ) -----------------------")
numbers = [1, 2, 3, 4, 5, 6]
def square(num):
    return num * num
mapping = map(square, numbers)
print(f"Mapping : {list(mapping)}")

def filteringFunction(number):
    if(number)>3:
        return number
    else:
        pass
filtering = filter(filteringFunction,numbers)
print(f"Filtering : {list(filtering)}")