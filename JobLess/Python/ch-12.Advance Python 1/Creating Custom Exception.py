'''
Raise : Using raise keyword we can create custom exception in python
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
print('Program Ends')
'''
output :
Enter Number1 :110
Enter Number2 :2
55.0
Exception Occurs : This number is two large 
Program Ends   
'''