'''
if __name__ == '__main__' in python :
__name__ evaluates to the name of the module in python from where the program is run

If the module is being run directly from the command line, the __name__ is set to string "__main__"
thus this behaviour is used to check wheter the module is run directly or imported to another file.
'''
def Function():
    try:
        Number1 = int(input("Enter the Number 1 -------->>"))
        Number2 = int(input("Enter the Number 2 -------->>"))
        print(Number1/Number2)

    except Exception as e:
        print(f"Exception Occured : {e}")
        return 0
    finally:    
        print("I will always been executed!")
Function()
print(__name__)  #---------->> current module name will print is it main module
if __name__ == '__main__':
    print("main")

# There is no change occurs while running the program but to check the changes we should have to import this modulw this is our module
