'''
CHAPTER : 12 -------> Advance Python 1
Exception Handling :
There are many builtin exceptions which are raise in python
when something goes wrong. Exception in python can be handled 
using a try statement.The code that handles the exception is 
written in the except clause.

try:
    #code                   ------->> code which might throw Exception
except Exception as e:
    print(e)

When Exception is handled the code flow continues without program interruption.        
'''
#==========================================================================================
# without try-except block : Error occur
print("Hello World")
a= int(input("Enter a Number---->>"))
b= int(input("Enter Another Number---->>"))
print(a+b)
print("There were no error.")

# With using try-except block : Error Handled
try:
    print("Hello World")
    a= int(input("Enter a Number---->>"))
    b= int(input("Enter Another Number---->>"))
    print(a+b)
except Exception as e:
    print(f"There is error occurs : {e}")    
print("There were no error.")

#=============================================================================
'''
we can also specify the exceptions to catch like below 
try:
    #code
except ZeroDivisionError:
    #code    
except TypeError:
    #code
except:
    #code
'''      
try:
    print("Hello World")
    a= int(input("Enter a Number---->>"))
    b= int(input("Enter Another Number---->>"))
    print(a+b)
except ValueError:  #--------------------> specifying the error.
    print("Value Error Occured.")    
except Exception as e:
    print(f"There is error occurs : {e}")    
print("There were no error.")


# Example : ZeroDivisionError Exception Handling
try:
    a = int(input("Enter Number 1 ----->>"))
    b = int(input("Enter Number 2 ----->>"))
    print(a/b)
except ZeroDivisionError:
    print("ZeroDivisionError Occured Here !!!")
print("Program Ended")        

# Example : Using Multiple Exceptions
try:
    print("Hello World")
    a= int(input("Enter a Number---->>"))
    b= int(input("Enter Another Number---->>"))
    print(a+b)
    print(a/b)
except ValueError:  #--------------------> specifying the error.
    print("Value Error Occured.")    
except ZeroDivisionError:
    print("ZeroDivisionError Occured Here !!!")   
except Exception as e:
    print(f"There is error occurs : {e}")    
print("There were no error.")
