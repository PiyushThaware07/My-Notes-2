a = 10
b = 10
print(id(a))
print(id(b))
print(a is b)
print(a is not b)

a = "nikhil"
b = "nikhil"
print(id(a))
print(id(b))
print(a is b)
print(a is not b)

a = "nikhil"
b = "raut"
print(id(a))
print(id(b))
print(a is b)
print(a is not b)

l1 = [10, 20, 30, 40]
l2 = [10, 20, 30, 40]
print(id(l1))
print(id(l2))
print(l1 is l2)  # is - used in address comparison
print(l1 == l2)  # == - used for content comparison

# ---------------------- Membership Operator (in & not in )-------------------------
s = "Python is very easy"
print('v' in s)
print('z' in s)
print('z' not in s)
print('python' in s)

l = ['nikhil', 'ankit', 'shubham', 'pankaj']
print('nikhil' in l)
print('sanjay' in l)
print('jason' not in l)