'''
Filter : It creates a list for which the function return true.

syntax - 
         list(filter(function))
                       |
                    It may be lambda function   
'''
# Without using filter Function :
#  Separate toping for practice
def is_even():
    for i in number:
        if i%2==0:
            evens.append(i)  
        else:
            odds.append(i)      
number = [2,3,4,5,6,7,8,9,1] 
evens = []  
odds = [] 
is_even()
print(evens)
print(odds)

# By using filter function :
def is_even(a):
   return a%2==0
def is_odd(a):
    return a%2!=0
number = [2,3,4,5,6,7,8,9,1] 
evens = tuple(filter(is_even, number))
print(evens)
odds = tuple(filter(is_odd, number))
print(odds)

# Above Question using lambda expression :
list1 = [1,2,3,4]
even_numbers = list(filter(lambda x:x%2==0, list1))
print(even_numbers)
odd_numbers = list(filter(lambda x:x%2!=0, list1))
print(odd_numbers)