function jandaba() {
  let num = Number(prompt());
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += i;
  }
  if ((sum / num) % 2 == 0 && sum / num > 20) {
    console.log("good mark");
  } else if ((sum / num) % 2 != 0 && sum / num < 20) {
    console.log("very bad mark");
  } else {
    console.log("get out");
  }
}
