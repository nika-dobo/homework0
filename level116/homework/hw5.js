// 6)გვერდზე იყოს ორი <p>.
// JS-ით გაცვალე ერთმანეთის textContent-ები
// (პირველის ტექსტი გახდეს მეორის და პირიქით).

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

let p11 = p1.textContent;

p1.textContent = p2.textContent;
p2.textContent = temp;