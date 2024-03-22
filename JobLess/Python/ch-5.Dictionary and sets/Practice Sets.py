# Question 1 : Write a program to create a directory of Hindi words with values as their english transition.provided user with an option to look it up?
# words = {"keys":"values"}
words = {
    "kaha": "Where",
    "kon": "Who",
    "kyse": "How",
    "tu": "you",
    "mein": "me",
}
print("The options are : ", words.keys())
search = input("Enter the word : ")
print('The meaning of the word : ', words.get(search))
# print('The meaning of the word : ', words[search])

# =====================================================================
print(" ")
# Question 2 : write a program to input eight numbers from the user and display all the unique numbers(once).
num1 = int(input("Enter Number 1 : "))
num2 = int(input("Enter Number 2 : "))
num3 = int(input("Enter Number 3 : "))
num4 = int(input("Enter Number 4 : "))
num5 = int(input("Enter Number 5 : "))
num6 = int(input("Enter Number 6 : "))
num7 = int(input("Enter Number 7 : "))
num8 = int(input("Enter Number 8 : "))

unique = {num1, num2, num3, num4, num5, num6, num7, num8}
print(unique)
print(type(unique))
# output ---->> {1, 2, 3, 4, 5, 6, 8}

# =====================================================================
print(" ")
# Question 3 : can we have a set with 18(int) and 18(str) as a vales in it ?
s = {18, "18"}
print(s)
# output ---->> {18,'18'}

# =====================================================================
print(" ")
# question 4 : what will be the length of this set s=set() s.add(20) s.add(20.0) s.add("20")
s = set()
s.add(20)
s.add(20.0)
s.add("20")
print(s)        # o/p ---->> {'20' , 20}
print(len(s))   # o/p ---->> 2

# =====================================================================
print(" ")
# Question 5 : what is the type of s={}
s = {}
print(type(s))
# output --->> <class 'dict'>

# =====================================================================
print("")
'''
Question 6 : create an empty directory which 
allows 4 friends to enter their favourite languages
as values and use key as their names.Assume that the names are unique.
'''
favlang = {}
a = input('Enter your Favorite language Herik --->> ')
b = input('Enter your Favorite language Pawan --->> ')
c = input('Enter your Favorite language vinit --->> ')
d = input('Enter your Favorite language Preetam --->> ')
favlang['Herik'] = a
favlang['Pawan'] = b
favlang['Vinit'] = c
favlang['Preetam'] = d
print(favlang)
'''
output ---->> 
Enter your Favorite language Herik --->> python
Enter your Favorite language Pawan --->> c
Enter your Favorite language vinit --->> c++
Enter your Favorite language Preetam --->> java
{'Herik': 'python', 'Pawan': 'c', 'Vinit': 'c++', 'Preetam': 'java'}
'''

# =====================================================================
print("")
# Question 7 : if name of any two friends is same then what will happen in Question 6
favlang = {}
a = input('Enter your Favorite language Herik --->> ')
b = input('Enter your Favorite language Pawan --->> ')
c = input('Enter your Favorite language vinit --->> ')
d = input('Enter your Favorite language Herik --->> ')
favlang['Herik'] = a
favlang['Pawan'] = b
favlang['Vinit'] = c
favlang['Herik'] = d
print(favlang)
'''
output --->> 
Enter your Favorite language Herik --->> python
Enter your Favorite language Pawan --->> c
Enter your Favorite language vinit --->> c++
Enter your Favorite language Herik --->> java
{'Herik': 'java', 'Pawan': 'c', 'Vinit': 'c++'}
'''

# =====================================================================
print("")
# Question 8 : what happen if the language of two friends are same then in que 6?
# solution : something happen it will be printed in different manner means name are same means key are same and dictionary will not allow us to put same name twice.

# =====================================================================
print("")
# Question 9 : can you change the values inside a list which is consumed in set s ={8,7,12,"Harry",[1,2]}
# solution --->> so no we can do any changes in set items inside the list. and first our que is wrong we cant add list in sets we can add tuple in set.