# Question 1 : write a program to find greatest of four numbers entered by the user.
num1 = int(input("Enter the number1 : "))
num2 = int(input("Enter the number2 : "))
num3 = int(input("Enter the number3 : "))
num4 = int(input("Enter the number4 : "))

if(num1>num4 and num1>num3 and num1>num2):
    print("Number1 is Bigger than other :",num1)
elif(num2>num4 and num2>num3 and num2>num1):
    print("Number2 is Bigger than other :",num2)
elif(num3>num4 and num3>num2 and num3>num1):
    print("Number3 is Bigger than other :",num3)
elif(num4>num3 and num4>num2 and num4>num1):
    print("Number4 is Bigger than other :",num4)
else:
    print("try Again")

# Another Approach :
if(num1>num4):      # team 1 vs team 4   --->> team 1 wins
    f1 = num1
else:
    f1 = num4
if(num2>num3):     # team 2 vs team 3   --->> team 2 wins
    f2 = num2
else:
    f2 = num3 
if(f1>f2):         # team 1 vs team 2
    print(str(f1) +" "+"is greatest")    
else:
    print(str(f2) +" "+"is greatest")          

#=======================================================================================
print(" ")
'''
Question 2 : write a program to find out whether a student is pass or fail if it requires 
total 40% and 33% in each subject to pass Assume 3 subjects and take marks as an input 
from the user ?
'''
subject1 = int(input("Enter subject 1 marks : "))
subject2 = int(input("Enter subject 2 marks : "))
subject3 = int(input("Enter subject 3 marks : "))
Total = subject1+subject2+subject3
Avg = Total/3.0

if(Avg>40 and subject1>33 and subject2>33 and subject3>33):
    print("pass")
else:
    print("fail")    


#=======================================================================================
print(" ")
'''
Question 3 : A spam comment is definded as a text containing following keywords:
             "make a lot of money","buy now","Subscribe this",
             "click this".Write a program to detect the spams.
'''
text = input("Enter the text : ")
spam = False
if("make a lot of money" in text):
    spam = True
elif("buy now" in text):
    spam = True 
elif("Subscribe this" in text):
    spam = True   
elif("click this" in text):
    spam = True 
else:
    spam = False    

if(spam):
    print("This text is spam")
else:
    print("This text is not spam")        

# output ---->> Enter the text : this is very nice video please Subscribe this now --->> This text is spam  

#================================================================================================================
# Question 4 : write a program to find whether  a given username contains less than 10 characters or not ?
username = input('Enter the username')
if len(username)<=10:
    print("Yes, the user name contains 10 character")
else:
    print("No,the username doesn't contains 10 character")  


#================================================================================================================
# Question 5 : Write a program to finds out whether a given name is present in a list or not ?
names = ["Piyush","Herik","vinit","Jason","Pawan"]
name = input("Enter the name to find it : ")
if name in names:
    print('We found it ',name)
else:
    print("unable to found")    

#================================================================================================================
'''
Question 6 : write a program to calculate the grade of a student from his marks from the following schemes:
                    90 - 100 : Ex
                    80 - 90  : A
                    70 - 80  : B
                    60 - 70  : C
                    50 - 60  : D
'''   
marks = int(input("Enter the marks : "))
if(marks>90 and marks<=100):
    print("Ex")
elif(marks>80 and marks<=90):
    print("A")
elif(marks>70 and marks<=80):
    print("B")
elif(marks>60 and marks<=70):
    print("C")             
elif(marks>50 and marks<=60):
    print("D")
else:
    print("Fail")   

#================================================================================================================
# Question 7 : write a program to find out whether a given post is taking about "harry" or not ?
text = input("Enter your message : ")
spam = False
if "Harry" in text :
    spam = True 
else: 
    spam = False

if(True):
    print("Yes taking about Harry")
else:
    print("Not taking about Harry")  