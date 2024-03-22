#------------------------( Range in python )---------------------------------
'''
The range funtion in python is used to generte a sequence of number.
we can also specify the start, stop and step-size as follows :
              range(start,stop,step-size)

              Syntax ---->> for i in range(start,end,step-size):
                                 print(i)
'''
#===========================================================================
# range default start from 0 :
for i in range(8):
    print(i)

#--------------------------------------------
print(" ")
# if i want to start from 1 then :  
for i in range(1,8):
    print(i)  
#--------------------------------------------
print(" ")
print("Step-Size")
for i in range(1,8,2):  # this will skip the element after every 2 no.
    print(i)    

#===========================================================================
'''
For loop with else : An optional else can be used with a for loop if code is to be 
                     executed when the loop exhausts.

'''
#===========================================================================
print("For with else in python : ")
for i in range(0,9):
    print(i)
else:
    print("This is inside else of for")    

'''
Output ---->> 
For with else in python :
0
1
2
3
4
5
6
7
8
This is inside else of for
'''
