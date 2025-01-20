# 9) გამოიყენეთ append და pop რომ დაატრიალოთ ლისტი და დაპრინტეთ შემდეგ 

list = []

print(list)

i = 0

while i < 5:
    num = int(input("enter your number: "))
    list.append(num)
    i += 1

list.reverse()

print(list)






list2 = [1, 2, 3, 4, 5]

print(list2)

list2.pop(4)
list2.pop(3)
list2.pop(2)
list2.pop(1)
list2.pop(0)

list2.append(5)
list2.append(4)
list2.append(3)
list2.append(2)
list2.append(1)

print(list2)
