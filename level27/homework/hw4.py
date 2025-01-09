# 4) შექმენით სია, სადაც გექნებათ 1-იდან 30-ის ჩათვლით რიცხვები. თქენი დავალებაა რომ ამ სიიდან აირჩიოთ ერთი ინდექსი, მომხმარებელმა კი უნდა შეიყვანოს ის ინდექსი რომელიც თქვენ აირჩიეთ. გამოიყანეთ while loop-ი იმისთვის რომ თუ მომხმარებელმა არ შეიყვანა ის ინდექსი რომელიც თქვენ აირჩიეთ, დაბეჭდოთ მესიჯი "Incorrect, Please try again" და ახლიდან მოსთხოვოს რიცხვის შეყვანა. სხვა შემთხვევაში თუ მომხმარებელმა შეიყვანა ინდექსი რომელიც თქვენ აირჩიეთ,  დაბეჭდეთ "You guessed the number!". სხვა შემთხვევაში თუ მომხმარებლის შეყვანილი რიცხვი არის მეტი 30-ზე, ამოუგდოს მესიჯი "Incorrect, You must enter a number from 1 to 30"


num = list(range(1, 31))

while True:
    user_num = int(input("enter number: "))
    if user_num == num[5]:
        print("You guessed the number!")
        break
    elif user_num > num[29]:
        print("Incorrect, Please try again")
    else:
        print("You must enter a number from 1 to 30")       
