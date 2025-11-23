// 3)შექმენით HTML გვერდი ცარიელი <div> ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას შექმნის ახალ <p> ელემენტს ტექსტით "New paragraph" და დაამატებს მას <div>-ის შიგნით.

function addParagraph(x) {
  const p = document.createElement("p");
  p.textContent = x;

  const div = document.getElementById("container");
  div.appendChild(p);
}

addParagraph("New paragraph");
