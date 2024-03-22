'''
String Slicing : A string in python can be Sliced for getting a part of the string.
                 consider the following string
                                          0 1 2 3 4 5  ---> indices
                                   name ="P I Y U S H" ---> Length : 5

                                   # name[3] = "d" --> This will display error due to TypeError: 'str' object does not support item assignment , so it is not allowed.
                Index of string starts from 0 to (length-1) in python. 
                in order to slice the string we use the following syntax :
                               demoString= name[index starts : index ends]
                               Example -->      012345 --> indices
                                        name = "PIYUSH"
                                        name[0:3]  
                                        output : PIY    

                print(name[:4]) #---> this will automatically takes minimum index i.e 0
                print(name[4:]) #---> this will automatically takes maximum index i.e 5 

Negative Indices String Slicing -------------->>
                                                       -6 -5 -4 -3 -2 -1   ----------> Indices
                                                name = "P  I  Y  U  S  H"

Slicing with Skip Value : we can provide a skip value as a part of our slice like this.
                          Example :
                                    word = "Amazing" 
                                               s e a     ---------------->> s:start , e:end , a:after:after every first char next2 char will be skip.    
                                    print(word[1:6:2]) 
                                    o/p ----> 'm z n'   

                print(Demo[:4:2]) #------>> 0:4:2 
                print(Demo[1::2]) #------>> 1:5:2     


length of String ----------------------->>      012345
                                          name="Piyush"
                                          print(len(name))
                                          o/p ---> 6

'''
# =================================================================================================================================
a = 34
b = "Harry"
print(type(a))
print(type(b))

# ----------------------------------------------------------------------------------------------------------
# concept : Due to some reason we use strings in double , Single or Triple quotes
c = "Piyush is 'good boy' and '''Nice person''' "
print(c)
# output : Piyush is 'good boy' and '''Nice person'''
# ----------------------------------------------------------------------------------------------------------
# STRING SLICING
greeting = "Good Morning"
name = "PIYUSH"
print("At index 0 which Character exists : ", name[0])
print("At index 1 which Character exists : ", name[1])
print("At index 2 which Character exists : ", name[2])
print("At index 3 which Character exists : ", name[3])
print("At index 4 which Character exists : ", name[4])
print("At index 5 which Character exists : ", name[5])
# -------> 3 no ko nahi gina jata hai.
print("Elements Existing between 0 to 3 is :", name[0:3])
print("Elements Existing between 1 to 4 is :", name[1:4])
print(name[:4])  # ---> this will automatically takes minimum index i.e 0
print(name[4:])  # ---> this will automatically takes maximum index i.e 5

# negative indices string slicing
#      -6 -5 -4 -3 -2 -1
name = "P  I  Y  U  S  H"

Demo = "PIYUSH"
print(Demo[-5:-2])

# Slicing with Skip value
#        s e a     ---------------->> s:start , e:end , a:after:after every first char next2 char will be skip.
d = Demo[1:4:2]
print(d)
print(Demo[:4:2])  # ------>> 0:4:2
print(Demo[1::2])  # ------>> 1:5:2
# -------------------------------------------------------
# length of String :
print(len(Demo))
print(" ")
# ----------------------------------------------------------------------------------------------------------
# Concadinating two Strings
print(greeting+" " + name)
print(type(name))
