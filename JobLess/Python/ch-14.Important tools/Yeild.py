'''
Yield : This keyword is used to generate the value it is used inside the function
'''
def generator():
    for item in range(1,5):
        yield item
g = generator()
print(g.__next__())
print(g.__next__())
print(g.__next__())
print(g.__next__())
# for i in g:
#     print(i)      
'''
o/p :
1
2
3
4
'''   


def simple():
    yield 1
    yield 2
    yield 3
for values in simple():
    print(values)


     