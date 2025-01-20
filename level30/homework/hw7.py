# 7) დაიწყეთ რიცხვების სიით, გამოიყენეთ while loop რომ წაშალოთ ყველა რიცხვი ამ სიიდან და გამოიყენეთ pop რო დაპრინტოთ ეს ყველა ელემენტი სანამ ლისტი არ დაცარიელდება

num = [1,2,3,4,5,6,7,8,9,10]

i = 0

while i < len(num):
    del_num = int(input("what do you want to delete: "))
    num.pop(del_num)
    

print(num)    