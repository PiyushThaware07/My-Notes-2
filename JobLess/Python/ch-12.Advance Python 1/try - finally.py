'''
Try with Finally : python offers a finally clause which ensures exception of a piece of code irrespective of the exception.

try:
    #somecode
except:
    #somecode    
finally:
    #somecode ----->> kuch bhi ho jaye ye toh run ho ke he rahega excaption handle ho ya na ho.    
'''
#===========================================================================================================================
# Example :
try:
    Number1 = int(input("Enter the Number 1 -------->>"))
    Number2 = int(input("Enter the Number 2 -------->>"))
    print(Number1/Number2)

except Exception as e:
    print(f"Exception Occured : {e}") 

finally:
    print("I will Always been Excecuted")    
print("Program Ended") 
'''
o/p : 1
Enter the Number 1 -------->>12
Enter the Number 2 -------->>0
Exception Occured : division by zero
I will Always been Excecuted
Program Ended
------------------------------------------
o/p : 2
Enter the Number 1 -------->>3
Enter the Number 2 -------->>3
1.0
I will Always been Excecuted
Program Ended
'''

# Use of Finally : 
def Function():
    try:
        Number1 = int(input("Enter the Number 1 -------->>"))
        Number2 = int(input("Enter the Number 2 -------->>"))
        print(Number1/Number2)

    except Exception as e:
        print(f"Exception Occured : {e}")
        return 0
    finally:    
        print("I will always been executed!")
Function()

'''
o/p : 1
Enter the Number 1 -------->>12
Enter the Number 2 -------->>0
Exception Occured : division by zero
I will Always been Excecuted
Program Ended
------------------------------------------
o/p : 2
Enter the Number 1 -------->>3
Enter the Number 2 -------->>3
1.0
I will Always been Excecuted
Program Ended
'''