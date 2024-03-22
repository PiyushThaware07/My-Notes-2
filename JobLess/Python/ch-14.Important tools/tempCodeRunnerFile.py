# Method Overriding
class Parent:
    def Property(self):
        print('cash+gold+power')

    def Marry(self):
        print("Hi")


class Child(Parent):
    def Marry(self):
        super().Marry()
        print("Hello")


child = Child()
child.Property()
child.Marry()