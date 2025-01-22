# 4) გააკეთეთ Find Maximum და გამოიყენეთ for loop. მიზანი: სიაში უნდა იპოვოთ მაქსიმუმი ინტეჯერი მაგალითად: [1, 546, 456 ,123] => [546]

num = [1, 546, 456, 123]

max_num = num[0]  

for i in num:
    if i > max_num:
        max_num = i

print(max_num)
