# 1 . List :
l1 = [1, 2, 3, 4, 5]
print("List-1 : ", l1)

l2 = list([1, 2, "Piyush", True])
print("List-2 : ", l2)

print(l2[3])

l2[3] = "Mutable"
print(l2)

# ----------------------------------
t1 = (1, 2, 3, 4, 5)
print("Tuple - 1", t1)
t2 = ()
print("Tuple - 2", t2, type(t2))
t3 = (1,)
print("Tuple - 3", t3, type(t3))
print(t1[3])