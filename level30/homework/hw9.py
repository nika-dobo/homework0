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

new_list = []

for i in range(1, len(list2) + 1):    
    new_list.append(list2[-i])
    

print(new_list)



