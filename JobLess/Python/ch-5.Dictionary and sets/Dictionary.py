# ----------------------- CHAPTER 5 : Dictionary & Sets -----------------------
'''
Dictionary: Collection of key value pair.
            Syntax ----->>
                           a={"Key" : "value"}

            Properties of Dictionary : 1) It is unordered.
                                       2) It is Mutable i.e means the element of dictiory can be change.
                                       3) It is Indexed
                                       4) Cannot contain Dublicate Keys.              
'''
# =============================================================================
myDictionary = {
    "Fast": "In a Quick Manner",
    "Harry": "A coder",
    'marks': [1, 2, 3],
    # --->> Nasted Dictionary {key : Value}
    "AnotherDictionary": {'Piyush': 'Player'},
}
print(myDictionary['Fast'])
print(myDictionary['Harry'])
print(myDictionary['marks'])
# mydictionary ke andar AnotherDictionary ke andar Piyush key ki kya value hai .
print(myDictionary["AnotherDictionary"]['Piyush'])

# ------------------------------------------------------------
print(" ")
#  2) It is Mutable
myDictionary['marks'] = [45, 32]
print(myDictionary['marks'])

# =============================================================================
'''
Dictionary Methods :
1)  print(myNewDictionary.keys())   : Used to print the keys of dictionary.
2)  print(myNewDictionary.values()) : Used to print the values of keys.
3)  print(myNewDictionary.items())  : It returns a list of key:value of dictionary.
4)  Update : it update the key & its value.
             Example ---->> updateDictionary ={
                                               'Disney':'World',
                                              }
                                               myNewDictionary.update(updateDictionary)
                                              print(myNewDictionary)
5) myNewDictionary.get("name") : returns the value of specific keys.                                              


'''
# =============================================================================
print(" ")

myNewDictionary = {
    'Marvel': 'Ironman',
    'Starplus': 'Sath nibhana Sathiya',
    'Disney': 'Mickey Mouse',
    1: 2
}
# 1) print(myNewDictionary.keys())
print(type(myNewDictionary.keys()))  # ----> o/p : <class 'dict_keys'>
# ---> o/p : ['Marvel', 'Starplus', 'Disney', 1]
print(list(myNewDictionary.keys()))

# ------------------------------------------------------------------

# 2)  print(myNewDictionary.values())
print(myNewDictionary.values())
# o/p ----> dict_values(['Ironman', 'Sath nibhana Sathiya', 'Mickey Mouse', 2])

# ------------------------------------------------------------------
print("")
# 3)  print(myNewDictionary.items())
print(myNewDictionary.items()),
# o/p ----> dict_items([('Marvel', 'Ironman'), ('Starplus', 'Sath nibhana Sathiya'),('Disney', 'Mickey Mouse'), (1, 2)])

# ------------------------------------------------------------------
print("")
# 4) Update
updateDictionary = {
    'Disney': 'World',
}
myNewDictionary.update(updateDictionary)
print(myNewDictionary)

# ------------------------------------------------------------------
print(" ")
# 5) print(myNewDictionary.get("name"))
print(myNewDictionary.get("Disney"))
# o/p ---> World

# But what is the difference in  print(myNewDictionary.get("name")) &&& print(myNewDictionary['name'])
print(" ")
# 1 Solution -->
print(myNewDictionary.get('Disney'))
print(myNewDictionary['Disney'])
# o/p ----->> Same for both but when

# 2 solution -->
print(myNewDictionary.get('Disney2'))  # this will throws none
# throws an error as Disney is not present in the dictionary.
print(myNewDictionary['Disney2'])
'''
o/p ----> none
          print(myNewDictionary['Disney2'])
          KeyError: 'Disney2'     
'''
