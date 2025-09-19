# 6) გააკეთეთ Filter Odd Numbers. მიზანი: გაფილტრეთ ყველრა კენტი რიცხვი და ჩაამატეთ ახალ სიაში და შემდეგ ეგ სია დაპრინტეთ

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

new_list = []

for i in range(len(num)):
    if num[i] % 2 != 0:
        new_list.append(num[i])

print(new_list)     