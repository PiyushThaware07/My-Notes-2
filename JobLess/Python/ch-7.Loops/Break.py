#-------------------------- Break -----------------------------------
for i in range(10):
    print(i)
    if(i==5):
        print("Hello")
        break
print("End")


#------------------------------------------------------------------------------------
# sometime we want that our for loop continue execute and no else portion will run.
print(" ")
for i in range(10):
    print(i)
    if(i==5):
        print("Hello")
        break
else:
    print("This is inside else of for.") 

'''
Output ---->>
0
1
2
3
4
5
Hello
'''
#================================================================================
'''
--------------------------   Summary  -------------------------------
initially i=0
print(0)
again initialize i=1
print(1)
again initialize i=2
print(2)
again initialize i=3
print(3)
again initialize i=4
print(4)
again initialize i=5
print(5)
---------->> Condition satiesfy <<---------------
if(5==5):
    print("Hello")
    break
---------->> Exit from loop <<-------------------
End    
'''