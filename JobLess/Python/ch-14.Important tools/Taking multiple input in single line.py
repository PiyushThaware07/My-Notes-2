# -------------------- Reading multiple values from keyword in single line ---------------------------------------------
a,b = [int(x) for x in input('Enter two numbers :').split()]
print(f'sum : {a+b}')
# o/p :
# Enter two numbers :2 3
# sum : 5


# ------------ WAP to read 3 float values from the keyword with,separations and print the sum --------------------------
a, b, c = [float(x) for x in input('Enter  3 float values with , separations:').split(',')]
print('The Sum:', a + b + c)