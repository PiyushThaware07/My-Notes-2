# Dictionary -----------------------------------
dict1 = {
    "key": "value",
    "dictInside": {
        "key2": "Value2"
    }
}
print(dict1)
print(dict1["dictInside"])
print(dict1.keys())
print(dict1.values())
print(dict1.items())

dict1["key"] = "value444"
print(dict1)

# Set -----------------------------------
s = {1, 2, 3, 4, 5}
print(s, type(s))
s = set("hello")
print(s, type(s))
s = set([1,2,3,4,5])
print(s,type(s))
s.add(3000)
print(s)
s.remove(2)
print(s)
s.pop()
print(s)
s.pop()
print(s)
s.pop()
print(s)
# set cant hold set 
s= {{1,2,3,4},5,6,7,2}
print(s)
