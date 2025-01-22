# 7) გააკეთეთ Sum Of Even Numbers. მიზანი: შეკრიბეთ ყველა ლუწი რიცხვი და შეინახეთ სიაში შემდეგ ეგ სია დაპრინტეთ 10 ჯერ

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

even_num = []

for num in num:
    if num % 2 == 0: 
        even_num.append(num)  

sum_of_even_numbers = sum(even_num)

for _ in range(10):
    print(sum_of_even_numbers)