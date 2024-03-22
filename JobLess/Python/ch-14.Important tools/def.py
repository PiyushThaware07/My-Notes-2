# The def keyword is used to create , (or define) a function.
# In python , function is a group of related statements that perform a specific task.

def add(n, m):
    return n + m


print(add(10, 20))
# output --->> 30
# -----------------------------------------------------------------------------------------------


def fun():
    print("Function is called")


fun()
# output --->> Function is called
# -----------------------------------------------------------------------------------------------


def arya(num):  # Function header
    # function body
    if num % 2 == 0:
        def message():
            print("You Entered an Even Number.")
    else:
        def message():
            print("You Entered an Odd Number")
    message()


# End of Function
# Now calling the functions
arya(2)
arya(3)  # calling the function again


# -----------------------------------------------------------------------------------------------

def function1():   # outer function
    print("Hello from outer function")

    def function2():   # inner function
        print("Hello from inner function")
    function2()


function1()


def function1():  # outer function
    print("Hello from outer function")

    def function2():  # inner function
        print("Hello from inner function")
    function2()


def function1():  # outer function
    x = 2  # A variable define with outer function

    def function2(a):  # inner function
        x = 6
        print(a+x)
    print(x)  # to display the value of x of outer function
    function2(3)


function1()


def f1():  # outer function
    print("Hello")

    def f2():  # inner function
        print("World")
    f2()


f1()


a = 1


def f1():
    a = 5
    print(a)  # 5 will print


print(a)  # 1 will print
f1()
