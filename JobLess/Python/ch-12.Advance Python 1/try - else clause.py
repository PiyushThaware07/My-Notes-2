'''
try with else clause :
sometimes we want to run a piece of code when try was successful

syntax --
try:
    #code
except:
    #code
else:    -------------> This else will only run when the try is successfully run
    #code  
'''  

try:
    num1 = int(input('Enter Number1 :'))
    num2 = int(input('Enter Number2 :'))
    print(num1/num2)
    # Creating Custom Exception
    if num1>100:
        raise Exception('This number is two large')

except Exception as e:
    print(f'Exception Occurs : {e}')  
else:
    print('Try was Successfully run')      
print('Program Ends')

# output : 1
# Enter Number1 :10
# Enter Number2 :1
# 10.0
# Try was Successfully run
# Program Ends

#---------------------------
#output : 2
# Enter Number1 :1
# Enter Number2 :0
# Exception Occurs : division by zero
# Program Ends
