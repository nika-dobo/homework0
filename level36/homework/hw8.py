# 8) მომხმარებელს შეეკითხეთ რიცხვი შემდეგ შექმენით ფუნქცია რომელსაც ექნება პარამეტრი რომელსაც არგუმენტად გადაეცემა მომხლარებლის შემოტანილი რიცხვი შემდეგ კი დაბეჭდავს ეს რიცხვი დადებითია თუ უარყოფითი

num = int(input("Enter a number: "))

def nums(num):
    if num > 0:
        print("dadebiti")
    elif num == 0:
        print("noli")    
    else:
        print("uaryofiti")
     

nums(num)    