'''
Reduce : It is applied to a rolling computation to sequential pair of elements.

Note : it is the part of funtools module so pls import it as ~~ from functools import reduce
Example :
if i want to do like this 
  1 + 2 + 3 + 4 + 5
  =====
  3 + 3 + 4 + 5
  =====
  6 + 4 + 5
  =====
  10 + 5
  ======
  15
'''
from functools import reduce
sum = lambda x,y: x+y
numbers = [1,2,3,4,5]
r = reduce(sum, numbers)
print(r)
# o/p : 15