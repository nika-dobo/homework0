# 8) შექმენით shopping სია სადაც მომხმარებელს შეეძლება რამე ნებისმიერი პროუქტის დამატება და წაშლა, როდესაც მორჩებიან შოპინგს დაუპრინტეთ საბოლოოდ რა შეიძინეს

shopping = []

while True:
    item = input("ra ginda iyido: ")
    shopping.append(item)
    print("ras daamateb")
    print("gaagrzelebt (ki/ara)")
    pasuxi = input()
    if pasuxi == "ara":
        break

print(shopping)

