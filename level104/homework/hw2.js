// 2)
// push----
// ფუნქციამ მიიღოს სია და ახალი ელემენტი. ახალი ელემენტი დაამატოს სიის ბოლოს და დააბრუნოს განახლებული სია.

function fuc1(arr) {
  arr.push(1);
  console.log(arr);
}

// ფუნქციამ მიიღოს სია და სტუდენტის სახელი. დაამატოს სტუდენტი სიის ბოლოს და დაბეჭდოს: "სტუდენტი დამატებულია!".

function fuc2(arr, studet) {
  arr.push(studet);
  console.log("სტუდენტი დამატებულია!");
  console.log(arr);
}

// pop----
// ფუნქციამ მიიღოს სია. სიის ბოლო ელემენტი წაშალოს და დააბრუნოს წაშლილი ელემენტი.

function fuc3(arr) {
  arr.pop();
  console.log(arr);
}

// ფუნქციამ მიიღოს სია (მაგ. პროდუქტების). ამოიღოს ბოლო პროდუქტი და დაბეჭდოს: "გაყიდული პროდუქტი იყო: ..."

function fuc4(arr, product) {
  arr.pop();
  console.log(`გაყიდული პროდუქტი იყო: ${product},`);
}

// unshift----
// ფუნქციამ მიიღოს სია და ახალი ელემენტი. ახალი ელემენტი დაამატოს სიის დასაწყისში და დააბრუნოს განახლებული სია.

function fuc5(arr, ell) {
  arr.unshift(ell);
  console.log(arr);
}

// ფუნქციამ მიიღოს სია და ქალაქის სახელი. დაამატოს ეს ქალაქი სიის დასაწყისში და დააბრუნოს სია.

function fuc6(arr, county) {
  arr.unshift(county);
  console.log(arr);
}

// shift----
// ფუნქციამ მიიღოს სია. წაშალოს პირველი ელემენტი და დააბრუნოს განახლებული სია.

function fuc7(arr) {
  arr.shift();
  console.log(arr);
}

// length----
// ფუნქციამ მიიღოს სია და დააბრუნოს ტექსტი: "სიაში არის N ელემენტი".

function fuc8(arr) {
  console.log(`სიაში არის ${arr.length} ელემენტი`);
}

// concat----
// ფუნქციამ მიიღოს ორი სია და დააბრუნოს ახალი სია, სადაც გაერთიანებულია ორივე.

function fuc9(arr1, arr2) {
  let both = arr1.concat(arr2);
  console.log(both);
}

// ფუნქციამ მიიღოს ორი სია: სახელების სია და გვარების სია. გააერთიანოს ისინი და დააბრუნოს სრული სია.

function fuc10(name, surname) {
  let both = name.concat(surname);
  console.log(both);
}

// ყველა ერთად----
// ფუნქციამ მიიღოს სია.

// დასაწყისში ჩასვას "A"

// ბოლოში ჩასვას "Z"

// წაშალოს პირველი ელემენტი

// წაშალოს ბოლო ელემენტი

// სხვა მეორე სიასთან გააერთიანოს(შექმენით თქვენით ახალი სია)

// დაბეჭდოს: "საბოლოო სიის სიგრძე არის: ... და საბოლოო სიაა ..."

function fuc11(arr1, arr2) {
  arr1.push(43);
  arr1.unshift(45);
  arr1.shift();
  arr1.pop();
  arr1.concat(arr2);
  console.log(arr1);
}

// push + for loop----
// ფუნქციამ მიიღოს ცარიელი სია და რიცხვი n.
// ციკლით ჩასვას 1-დან n-მდე ყველა რიცხვი სიაში  (push) და დააბრუნოს სია.

function fuc12(n) {
  let arr = [];
  for (let i = 1; i < n; i++) {
    arr.push(i);
  }
  console.log(arr);
}

// pop + for loop----
// ფუნქციამ მიიღოს სია.
// ციკლით 3-ჯერ წაშალოს სიის ბოლო ელემენტი (pop) და ბოლოს დააბრუნოს დარჩენილი სია.

function fuc13(arr) {
  for (let i = 0; i < 3; i++) {
    arr.pop();
  }
  console.log(arr);
}

// concat + for loop ----
// ფუნქციამ მიიღოს ორი სია.
// გააერთიანოს (concat), შემდეგ for-ით დაბეჭდოს თითოეული ელემენტი ცალ-ცალკე.

function fuc14(arr1, arr2) {
  arr1.concat(arr2);
  for (let i = 0; i < arr1.length(); i++) {
    console.log(arr1[i]);
  }
}

// ყველა მეთოდი რაც ვისწავლეთ + for loop----

// ფუნქციამ მიიღოს სია.

// დასაწყისში ჩასვას "Start" (unshift)

// ბოლოში "End" (push)

// წაშალოს პირველი (shift)

// წაშალოს ბოლო (pop)

// გააერთიანოს მეორე სიასთან (concat)

// for-ით დაბეჭდოს ყველა ელემენტი.
// ბოლოს დააბრუნოს "საბოლოო სიის სიგრძე: N".

function fuc15(arr1, arr2) {
  arr1.push("End");
  arr1.unshift("Start");
  arr1.shift();
  arr1.pop();
  arr1.concat(arr2);
  for (let i = 0; i < arr1.length(); i++) {
    console.log(arr1[i]);
  }
  console.log(`საბოლოო სიის სიგრძე: ${arr1.length}`);
}
