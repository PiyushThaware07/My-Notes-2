'''
Chapter - 9 : File I/O
File : file is used to store a data in device memory.
Types of Files :
1. Text Files (.txt .c ... etc)
2. Binary Files (.Jpg , .png , .mp4)

/// A Programmer can write as well as ready a file 
Python has a lot of functions for reading,writing,updating or deleting a file.

Opening a file :
python has open() funtion which is used to open a file.It will take two parameters which are 
         open('file name (path)','mode')
'''



f = open("ch-9.File I and o\Text Files/1.txt",'r')
data = f.read()
print(data)
f.close()

# Bydefault the mode is 'r'
a = open('ch-9.File I and o\Text Files/2.txt')
data = a.read()
print(data)
a.close()

# We can also specify no of character should be print 
a = open('ch-9.File I and o\Text Files/2.txt')
data = a.read(3)
print(data)
a.close()


# Other methods to read a file : readline() , readlines()
a = open('ch-9.File I and o\Text Files/readline.txt')
# Read First line
data = a.readline()
print(data,end='')
# Read second line
data = a.readline()
print(data)
a.close()

'''
Modes of Operation :
r -----> open for reading
w -----> open for writing
a -----> open for appending
+ -----> open for updating

'rb' ---> will open for read in binary mode
'rt' ---> will open for read in text mode
'''
# Writing a File :
f = open('ch-9.File I and o/Text Files/writing a file.txt','w')
f.write('This is written')
f.close()

# Appending a File :
f = open('ch-9.File I and o/Text Files/Append a file.txt','a')
f.write('I am appending')
f.close()