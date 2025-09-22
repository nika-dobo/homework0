//6)მომხმარებელს შემოატანინე რიცხვი,სანამ მომხმარებელი არ შემოიტანს 0 იანს იქამდე  შეამოწმეთ -->თუ მომხმარებლის შემოტანილი რიცხვი არის უარყოფითი დაუკონსოლლოგეთ --> "negative number" , თუ მომხმარებელმა შემოიტანა დადებითი რიცხვი დაუკონსოლლოგეთ --> "You entered posotive number" ,ამის შემდეგ კი თავიდან მოსთხოვეთ რომ შშემოიტანოს რიცხვი მომხმარებელმა,თუ შემოიტანა მომხმარებელმა 0 ეს იმას ნიშნავს რომ ვაილ ლუპი არ იმუშავებს და ქვემოთ მის გარეთ დაუკონსოლლოგეთ -- > "you guessed the number,the loop is over"

while (true) {
  let num = Number(prompt("enter num"));
  if (num === 0) {
    console.log("you guessed the number,the loop is over");
    break;
  } else if (num < 0) {
    console.log("negative number");
  } else {
    console.log("You entered posotive number");
  }
}
