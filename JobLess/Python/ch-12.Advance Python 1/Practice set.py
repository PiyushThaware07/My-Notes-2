'''
Question : 1) Write a Python program to open three files 1.txt , 2.txt , 3.txt ,
If any of these files are not present a message without existing the program must be printed prompting the same ?
'''

try:
    with open('ch-12.Advance Python 1.py\Practice set files/1.txt','r') as f:
        f.read()
    with open('ch-12.Advance Python 1.py\Practice set files/2.txt','r') as f:
        f.read()
    with open('ch-12.Advance Python 1.py\Practice set files/3.txt','r') as f:
        f.read() 
except Exception as e:
    print(f"The files is not present.Reason : {e}")

print("Thanks for using th program.")

#======================================================================================================================
'''
Question : 2) Write a Python program to print third , fifth and seventh element from the list using enumerate function ?
'''
l = [1,2,3,4,5,6,7,8,9]
for index,item in enumerate(l):
    if(index+1==3 or index+1==5 or index+1==7):
        print(item)

#======================================================================================================================
'''
Question : 3) Write a list comprehension to print a list which contains the multiplication table of a user entered number ?
'''        
num = int(input("Enter the list --->>"))
multiplication = [i*num for i in range(1,11)]
print(multiplication)

#======================================================================================================================
'''
Question : 4) write a program to display a/b where a and b are integers If b=0 , display infinity by handling the ZeroDivisionError ?
'''  
try:
    a = int(input("Enter the value of a :"))
    b = int(input("Enter the value of b :"))
    c = a/b

except ValueError:
    print("Value Error Occured")        
except ZeroDivisionError:
    c = "Infinite"
except Exception as e:
    print(f"This problem occured : {e}")
print(c)            


#======================================================================================================================
'''
Question : 5) Store the Multiplication tables generated in Problem-3 in a file named Tables.txt ?
'''  
num = int(input("Enter the list --->>"))
Table = [i*num for i in range(1,11)]
print(tuple(Table))

with open('ch-12.Advance Python 1.py\Practice set files/Table.txt','w') as f:
   f.write(str(Table))