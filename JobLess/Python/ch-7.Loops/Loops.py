'''
Loops : sometimes we wants to repeat few sets of instruction again and
        again that time we use this loop.

        Types of loop :
        1) While loop
              Syntax ---->> while(condition):
                               // code
              Note ------>> If the condition never becomes false then the
                            loop is continuously executed.                     
        2) for loop   
              syntax ---->> m = [1,2,7,8]
              for item in m:
                  print(item)    
'''
# =====================================================================
# 1) while loop :
i = 0
while(i < 10):
    print("Hello", i)
    i = i+1
print("Done")  

#Quick Quiz : write a program to print 1 to 50 using a while loop :
print(" ")
i=1
while(i<=50):
    print(i)
    i = i +1
print("End")

# Quick Quiz : write a program to print the content of list using while loop :
print(" ")
names = ["Herik","Vinit","Pawan","Sharique","Piyush","Mrunal","Shreyash"]
i=0
while i<len('names')+1:
    print(names[i]+" "+"Hello")
    i = i+1
#--------------------------------------------------------------------------
print(" ") 

# 2) for loop : 
names = ["Herik","Vinit","Pawan","Sharique","Piyush","Mrunal","Shreyash"]
for item in names:
    print(item+" "+"Hello")