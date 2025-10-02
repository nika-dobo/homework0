function rame() {
  while (true) {
    let num = Number(prompt("enter number 1-10"));
    if (num < 10 && num > 1) {
      break;
    } else {
      console.log("try agein");
    }
  }

  if (num % 2 == 0) {
    for (let i = num; i < 50; i++) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  } else {
    let n = num;
    while (n < 50) {
      if (n % 2 != 0) {
        console.log(n);
      }
      n++
    }
  }
}

rame()