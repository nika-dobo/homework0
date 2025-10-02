function even() {
  let num = Number(prompt());
  let arr = [];

  for (let i = 1; i < num; i++) {
    arr.push(i);
  }
  for (let i = 0; i < num.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
    }
  }
}
