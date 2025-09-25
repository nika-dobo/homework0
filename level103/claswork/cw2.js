let list = [20, "giorgi", 16, 60.7, "tbilisi", "jora"];

i = 0;
while (i < list.length) {
  console.log(list[i]);
  i++;
}

list[1] = "irakli";
list[2] = 90;
list[5] = "givia";

console.log(list);
