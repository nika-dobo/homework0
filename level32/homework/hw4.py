# 5) გააკეთეთ Find Minimum და გამოიყენეთ for loop. მიზანი: სიაში უნდა იპოვოთ მინიმალური ინტეჯერი მაგალითად: [1, 546, 456 ,123] => [1]


num = [45, 546, 456, 123]

min_num = num[0]  

for i in num:
    if i < min_num:
        min_num = i

print(min_num)


