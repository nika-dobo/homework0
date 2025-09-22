//3)მომხმარებელს შემოატანინეთ რაიმე რიცხვი,სანამ მომხმარებელი არ შემოიტანს 0 იანს იქამდე გაუმეორეთ რომ თავიდან შემოიტანოს რიცხვი

while (true) {
  let num = Number(prompt("enter num"));
  if (num === 0) {
    console.log("corect");
    break;
  } else {
    console.log("incorect");
  }
}
