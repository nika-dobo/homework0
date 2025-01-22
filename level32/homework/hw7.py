# 8) გააკეთეთ Sum Of Odd Numbers. მიზანი: შეკრიბეთ ყველა კენტი რიცხვი და შეინახეთ სიაში შემდეგ ეგ სია დაპრინტეთ 10 ჯერ

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Odd_num = []

for num in num:
    if num % 2 != 0: 
        Odd_num.append(num)  

Odd_numbers = sum(Odd_num)

for _ in range(10):
    print(Odd_numbers)