// 1)შექმენი სიას სადაც შეინახავ რამდენიმე ობიექტს, ყველა ობიექტში იყოს მსგავსი კიები მაგ: name ,surname , email , შენი დავალებაა რომ მოახდინო სიის დესტრუქცია შემდეგ თითოეული დესტრუქცია და მათი მნიშვნელოობების დაბეჭდვა

const persons = [
  {
    name: "nika",
    surename: "dobo",
    email: "adsasdada@gamil.com",
  },

  {
    name: "ana",
    surename: "blbblb",
    email: "cxvxcvx@gamil.com",
  },

  {
    name: "gio",
    surename: "utyyutyu",
    email: "liluiluil@gamil.com",
  },
];

let [person1, person2, person3] = persons;

let {
  name: person1Name,
  surename: person1Surename,
  email: person1Email,
} = person1;
console.log(person1Name);
console.log(person1Surename);
console.log(person1Email);

let {
  name: person2Name,
  surename: person2Surename,
  email: person2Email,
} = person2;
console.log(person2Name);
console.log(person2Surename);
console.log(person2Email);

let {
  name: person3Name,
  surename: person3Surename,
  email: person3Email,
} = person3;
console.log(person2Name);
console.log(person2Surename);
console.log(person2Email);
