// 2)მომხამრებელს შემოატანინე ორი რიცხვი start და end ი ,შემდეგ დაატიალეთ ფორ ციკლი start იდან end ის ჩათცლით და ამ გაიგე ამ რიცხვების ჯამი,შეინახე ეს ჯამი ცვლადში და შემდეგ გამოთვალეთ საშაუალო არითმეტიკული და გამოიტანეთ კონსოლში

let start2 = Number(prompt("enter the start"));
let end2 = Number(prompt("enter the end"));

let num = 0;

for (i = start2; i < end2; i++) {
  num += i;
}

console.log(num / (end2 - start2));
