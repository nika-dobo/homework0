#  12)  მომხმარბელს შემოატანინეთ რიცხვი შემდეგ კი მომხმარებლის შემოტანილ რიცხვამდე დაბეჭდეთ რიცხვები და გვერძე მიუწერეთ ლუწია თუ კენტი


num = int(input("enter number: "))


for i in range(num):
    if i % 2 == 0:
        print(str(i) + "-" + "luwi")
    else:
        print(str(i) + "-" + "kenti")
