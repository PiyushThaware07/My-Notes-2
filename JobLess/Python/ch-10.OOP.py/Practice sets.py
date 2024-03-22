'''
Question . 1) create a class Employee for storing the information of few programmers working at microsoft ?
'''
class Employee:
    company = "Microsoft"
    def Employee_Details(self,name,salary,city,country):
        print(f"Full Name : {name}\nSalary : {salary}\nCity : {city}\nCountry : {country}")

piyush = Employee()
piyush.Employee_Details("Piyush Thaware",1000,"Nagpur","India")

print(" ")

Shreyash = Employee()
Shreyash.Employee_Details("Shreyash Thaware",2000,"Nagpur","India")

#============================================================================================================
print(" ")
'''
Question . 2) Write a class Calculator to calculate of finding the square,cube and square root of a number ? 
'''

class Calculator:
    def __init__(self,num):
        self.number = num

    def square(self):
        print("The value of Square is :",self.number**2)    
    def cube(self):
        print("The value of Cube is :",self.number**3)  
    def root(self):
        print("The value of squareroot is :",self.number**0.5) 
a = Calculator(3)   
a.square() 
a.cube()
a.root()

#============================================================================================================
print(" ")
'''
Question . 3) Create a class with a class attribute a , create an object from it and set a directly using object.a=0 
              Does this change the class attribute ?
'''
class Sample:
    a = "Piyush"  #--------> class Attribute

obj = Sample()
obj.a = "Sahil"   #--------> Instance Attribute

print(Sample.a)
print(obj.a)

# for change the attribute use this :
Sample.a = "Punit"
print(Sample.a)


#============================================================================================================
print(" ")
'''
Question . 4) Add a static method in Ques-2 to greet the user with "Hello" ? 
'''
class Calculator:
    def __init__(self,num):
        self.number = num

    def square(self):
        print("The value of Square is :",self.number**2)    
    def cube(self):
        print("The value of Cube is :",self.number**3)  
    def root(self):
        print("The value of squareroot is :",self.number**0.5) 

    @staticmethod
    def greet():
        print("Hello")    
a = Calculator(3)   
a.square() 
a.cube()
a.root()
a.greet()

#============================================================================================================
print(" ")
'''
Question . 5) Write a class Train which has methods to book ticket, get status(no of seats) and getFare information
              of trains running under Indian Railway ?
'''
class Train:
    def __init__(self,name,fare,seats):
        self.name = name
        self.fare = fare
        self.seats = seats
    def getStatus(self):
        print(f"The name of train is {self.name}")
        print(f"The no of seats available in a train is {self.seats}")
    def fareInfo(self):
        print(f"The fare of train is Rs.{self.fare}")
    def bookTicket(self):
        if(self.seats>0):
            print(f"Your Ticket has been booked! and you seat no is {self.seats}")
            self.seats = self.seats - 1
        else:
            print("Sorry!!,This train is booked Kindly try next time.")       
Passenger1 = Train("Intercity Express",100,4)
Passenger1.getStatus()
Passenger1.fareInfo()
Passenger1.bookTicket()
Passenger1.getStatus()
Passenger1.bookTicket()
Passenger1.getStatus()
Passenger1.bookTicket()
Passenger1.getStatus()