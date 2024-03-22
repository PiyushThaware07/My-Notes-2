a = 4
b = 2
c = 3 if a>b else 10
print(c)

# print minimum value between two number using ternary operator
num1 = eval(input('Enter the number1:'))
num2 = eval(input('Enter the number2:'))
min = num1 if num1<num2 else num2
print(f'Minimum Value is : {min}')

# print maximum value between two number using ternary operator
num1 = eval(input('Enter the number1:'))
num2 = eval(input('Enter the number2:'))
min = num1 if num1>num2 else num2
print(f'Maximum Value is : {min}')

# normal python code
a, b = 2, 3
if a > b:
    print('a')
else:
    print("b")

# normal code --->> Equivalent code with ternary operators
a, b = 2, 3
print("a" if a > b else "b")

# Ternary Operator
is_fast = True
car = "ferrari" if is_fast else "maruti"
print(car)