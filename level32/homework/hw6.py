# 7) გააკეთეთ Sum Of Even Numbers. მიზანი: შეკრიბეთ ყველა ლუწი რიცხვი და შეინახეთ სიაში შემდეგ ეგ სია დაპრინტეთ 10 ჯერ

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

sum_of_even_numbers = 0

for i in range(len(num)):
    if num[i] % 2 == 0: 
         sum_of_even_numbers += num[i]

print(sum_of_even_numbers)