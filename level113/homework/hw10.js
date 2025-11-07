// 10)შექმენით ობიექტი რომელიც იქნება ცარიელი,შენი დავალებაა რომ ამ ობიექტშ დაამატო 5 property,შემდეგ დააკონსოლლოგეთ(რომ შეამოწმოთ შეივსო(დაემატა)თუ არა ,და ამის შემდეგ ამოშალოთ 2 property (ბოლოს დააკონსოლლოგეთ რომ ნახოთ ამოიშალა თუარა)

let obj = {};

obj.name = "nika";
obj.age = 17;
obj.surname = "dobo";
obj.academy = "GOA";
obj.school = 10;
obj.garde = 12;

console.log(obj);

delete obj.school;
delete obj.garde;

console.log(obj);
