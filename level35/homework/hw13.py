# 13) შექმენით ფუნქცია რომელშიც იქნება რიცხვებით სავსე სია შემდეგ კი დაბეჭდავს ამ სიაში არსებული რიცხვების ჯამს

def list_sum():
    list = [34, 545, 64, 324, 54, 6, 2, 4, 54, 54, 23, 465, 43, 34, 43, 2, 123, 51, 234, 64, 3, 4, 23, 42342, 543, 543,]
    sum = 0
    for i in range(len(list)):
        sum += list[i]
    print(sum)    

list_sum()      