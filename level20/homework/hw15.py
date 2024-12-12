# 16)შეიყვანეთ რიცხვი და დაბეჭდეთ მისი ყველა წყვილი რიცხვი (მაგალითად, 8 -> 2, 4, 6, 8).



num = int(input("ente number: "))


if num % 2 == 0:
    for i in range(2, num, 2):
        print(i)
        
else:
    for i in range(1, num, 2):
        print(i)  
        