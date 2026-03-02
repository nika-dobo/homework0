// 7)ცვლადი role:
// შეამოწმე თუ ცვლადში ინახება შემდეგი მნშვნელობები გამოიტანე შესაბამისი ტექსტი

// "admin"

// "user"

// "guest"

// switch–case-ით განსაზღვრე წვდომა.
// თუ სხვა მნიშვნელობაა -> default ->
// "როლი არ არის განსაზღვრული"

const role = prompt("შეიყვანეთ როლი (admin, user, guest):");

switch (role) {
  case "admin":
    console.log("სრული წვდომა სისტემაზე");
    break;
  case "user":
    console.log("სტანდარტული მომხმარებლის წვდომა");
    break;
  case "guest":
    console.log("მხოლოდ წაკითხვის უფლება");
    break;
  default:
    console.log("როლი არ არის განსაზღვრული");
}
