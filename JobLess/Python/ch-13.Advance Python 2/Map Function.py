'''
Map : It will applies the function to all the item in an input_list.

syntax --
map(func, iter1)
'''


# def square(n):
#     return n**2
# print(square(2))    
# print(square(4))
# ..... elements  (instead of doing this for every elements we can use map fucntion) 


# By using Map function :
def square(n):
    return n**2
number_list = [1,2,3,4,5,6,7,8,9]
print(map(square, number_list)) # This will give map object which is convertable
nl = map(square,number_list)
print(list(nl))


# Example - 1
list1 = (5,4,3,2,1)
def sum(a):
    return lambda b:a+b
mapping = map(sum(30), list1)
print(mapping,'Its type is :',type(mapping))
print(list(mapping))    
    
    
#  Example -- 2 : Find the length of ench element in a given list.
name = ["Punit","Herik","Sharique"]
length = list(map(len, name))        
print(length)