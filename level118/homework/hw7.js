// 7)შექმენით HTML გვერდი <div id="container"></div> და <button> ელემენტით.
// -----ყოველი დაჭერისას შექმენით ახალი <p> ელემენტი ტექსტით "Item X" (X = დამატებული ელემენტების რაოდენობა).
// -----დაამატეთ ახალი ელემენტი container-ში.

const container = document.getElementById("container");
const addBtn = document.getElementById("addBtn");

let count = 0;

function addItem() {
  count++;
  const p = document.createElement("p");
  p.textContent = "Item " + count;

  container.appendChild(p);
}

addBtn.addEventListener("click", addItem);
