'''
Eval() : Since defualt input type is string but if we use eval() then it will
allow us to put any kind of datatype and convert the data as according to our input.
'''

i = 0
while i<10:
    a = eval(input('Enter the value :'))
    print(a)
    print(type(a))
    i=i+1
'''
o/p :
Enter the value :True
True
<class 'bool'>

Enter the value :2.222
2.222
<class 'float'>

Enter the value :24
24
<class 'int'>

Enter the value :"PIyush"
PIyush
<class 'str'>
'''
