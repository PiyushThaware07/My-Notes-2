class Employee:
    company = 'Google'

    def getsalary(self):
        print(f'Salary of a employee is : {self.salary}')
e1 = Employee()
print(e1.company)
e1.salary = input('Enter the salary --->')
e1.getsalary()

if __name__=='__main__':
    print("main")