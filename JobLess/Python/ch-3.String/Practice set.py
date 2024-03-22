# Question 1 : write a python program to display a user entered name followed by Good Afternoon using input() functtion ?
a=input('Enter Name : ')
print("Good Afternoon"+" "+a)

#-----------------------------------------------------------------------------------------------------------------------------

# Question 2 : Write a program to fill in a letter template given below with name and date ?
name=input('Enter Name : ')
date=input('Enter date : ')
print("'''Dear"+" "+name+","+"\nYou are selected!\n"+date+"'''")

#-----------------------------------------------------------------------------------------------------------------------------

# Question 3 : Write a python  program to detect double and triple spaces in a string ?
spaces="I am a  good   boy"
print("Double spaces available : ",spaces.find("  "))
print("Triple spaces available : ",spaces.find("   "))

#-----------------------------------------------------------------------------------------------------------------------------

# Question 4 : Write a program to format the following letter using escape sequence characters ?
letter="Dear Piyush,\nThis Python Course is nice.\nThanks"
print(letter)

#-----------------------------------------------------------------------------------------------------------------------------

# Question 5 : Replace double and triple spaces from problem 3 with single spaces ?
spaces="I  am a  good   boy"
print("Replace Double Spaces ",spaces.replace("  "," "))
print("Replace Triple Spaces ",spaces.replace("   "," "))

#-----------------------------------------------------------------------------------------------------------------------------
