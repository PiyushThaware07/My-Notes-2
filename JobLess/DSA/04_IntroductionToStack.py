'''' 
Stack : It follows the rule First in last out (FILO) and Last In First Out (LIFO)

Opertaions on stack :
1. Push - add element to the stack
2. Pop - remove element from stack
3. Peek or Top - top most element in stack
4. isEmpty - check stack empty or not

there are different ways to implement stack in python like as follow
1. list : append, pop
2. using modules like - collection module(deque), Queue
'''


'''
# & Direct Method 
print("Appending-----")
array = []
array.append(10)
print(array)
array.append(20)
print(array)
array.append(30)
print(array) 
# [10, 20, 30]

print("Popping-----")
array.pop()
print(array) 
array.pop()
print(array) 
array.pop()
print(array) 

# To get the last element of stack
array.append(30)
array.append(40)
array.append(50)
print(array[-1],array[0])

'''


'''
# & PROGRAM - 1 : Combine Code
stack = []
def Push():
    element = input("Enter the element that you want to insert : ")
    stack.append(element)
    print("Stack : ",stack)

def Pop():
    if len(stack) == 0:
        print("Stack is empty failed to pop the element")
    else:
        element = stack.pop()
        print("Removed Element is : ",element)
        print("Stack : ",stack)

def Peek():
    if len(stack)== 0:
         print("Stack is empty failed to peek the element")
    else:
        element = stack[-1]
        print("Top Most Element Is : ",element)

while True:
    print("Select the operation that you want to perform :\n1.Push\n2.Pop\n3.Peek\n4.Quit")
    choice = int(input("Enter the option here : "))
    if choice == 1:
        Push()
    elif choice == 2:
        Pop()
    elif choice == 3:
        Peek()
    elif choice == 4:
        break
    else:
        print("Enter the correct operation.")
'''

'''
# & PROGRAM 2 : Modification of above code
stack = []
def PushElement():
    if len(stack)==size:
        print(f"Stack is full unable to insert more elements further. {stack}")
    else:
        element = input("Enter the element that you want to insert : ")
        stack.append(element)
        print(f"Stack : {stack}")

def PopElement():
    if len(stack)==0:
        print("Stack Is Empty Unable To Pop Elements")
    else:
        element = stack.pop()
        print("Element Popped Out Is : ",element)
        print("Stack : ",stack)

def PeekElement():
    if len(stack)==0:
        print("Stack Is Empty Unable To Pop Elements")
    else:
        element = stack[-1]
        print("The Top Most Element Is : ",element)

size = int(input("Enter the size of stack : "))
while True:
    print("Select the operation that you want to perform :\n1.Push\n2.Pop\n3.Peek\n4.Quit")
    option = int(input("Enter the option : "))
    if option==1:
        PushElement()
    elif option==2:
        PopElement()
    elif option==3:
        PeekElement()
    elif option==4:
        break
    else:
        print("Please select a correct option")
'''

'''
# & Stack Using Collection Module
import collections
stack = collections.deque() # now stack is created
# Pushing
print(stack)
stack.append(10)
print(stack)
stack.append(20)
print(stack)
stack.append(30)
print(stack)
stack.append(40)
print(stack)
# Peek element
print(stack[-1])
# Popping
stack.pop()
print(stack)
stack.pop()
print(stack)
stack.pop()
print(stack)
stack.pop()
print(stack)
stack.pop()
print(stack)
'''


import queue

stack = queue.LifoQueue() # you san mentioned the size of stack like this queue.LifoQueue(size)
print(stack)
# Pushing elements onto the stack
stack.put(10)
stack.put(20)
stack.put(30)
stack.put(40)

# Popping elements from the stack
stack.get()
stack_values = list(stack.queue)
print(stack_values)
stack.get()
print(stack)
stack.get()
print(stack)
stack.get()
print(stack)
