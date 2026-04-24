// 3)გვერდზე გაქვს ქუაუნთერი + -  და reset ღილაკებით

// დავალება:

// ყოველ დაჭერაზე counter იზრდება 1 ით

// მნიშვნელობა ინახება localStorage-ში

// refresh-ზე არ ნულდება


const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const resetBtn = document.getElementById("resetBtn");
const counter = document.getElementById("counter");

let count = localStorage.getItem("count");
counter.textContent = count;

plusBtn.addEventListener("click", () => {
    count++;
    counter.textContent = count;
    localStorage.setItem("count", count);
});

minusBtn.addEventListener("click", () => {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count);
});

resetBtn.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
    localStorage.setItem("count", count);
});
