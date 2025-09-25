// 3)ფუნქციამ მიიღოს პაროლი (პარამეტრი).

// while loop-ში მომხმარებელს (prompt) მოსთხოვოს პაროლი.

// სანამ შეყვანილი პაროლი არ დაემთხვევა სწორ პარამეტრს, მოსთხოვე თავიდან.

// თუ დაემთხვა → "წარმატებით!"

function password(password) {
  while (true) {
    let trypasword = prompt();
    if (trypasword == password) {
      console.log("done");
      break;
    } else {
      console.log("again");
    }
  }
}

password("asdawqw");
