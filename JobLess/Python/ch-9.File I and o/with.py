# Using with : we can automatically open() or close() a file. 

#  Reading
with open('ch-9.File I and o\Text Files\with.txt','r') as f:
    a = f.read()
print(a)

# Writing
with open('ch-9.File I and o\Text Files\with.txt','w') as f:
    a = f.write('This is with in writing mode')



