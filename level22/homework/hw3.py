# 3) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან ამ რიცხვამდე დაბეჭდეთ ყველა რიცხვის კვადრატის ჯამი


ran = int(input("enter your number: "))

sum = 0

for i in range(ran):
    sum += (i ** 2)
    

print(sum)   