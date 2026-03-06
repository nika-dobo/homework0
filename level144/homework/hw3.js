// შექმენით მომხმარებლის ობიექტი, რომელსაც აქვს მომხმარებლის სახელი და ელფოსტა, მაგრამ არ აქვს როლი.
// დავალება: დესტრუქციის დროს დაამატე ცვლადი role ნაგულისხმევი მნიშვნელობით (მაგალითად: "guest"), იმ შემთხვევისთვის თუ ობიექტში არ არსებობს.

const user = {
  name: "nika",
  email: "blabla@gamil.com",
};

const { name, email, role = "guest" } = user;

console.log(name);
console.log(email);
console.log(role);
