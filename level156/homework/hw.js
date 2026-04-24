// 1)შექმენი ერთი ინფუთი,საბმით ღილაკი და ერთ პარაგრაფი

// მომხმარებელი წერს input-ში სახელს და აჭერს ღილაკს.ამის შემდეგ პარაგრაფში უნდა გამჩნდეს მომხმარებლის მიერ შეყვანილი მნიშნველობა

// დავალება:
// შეინახე ეს სახელი localStorage-ში და გვერდის გადატვირთვის შემდეგაც გამოჩნდეს.

const input = document.getElementById("input1");
const submitBtn = document.getElementById("submitBtn");
const txt = document.getElementById("txt");

submitBtn.addEventListener("click", () => {
  txt.textContent = input.value;
  localStorage.setItem("txt", input.value);
});

const storedtxt = localStorage.getItem("txt");
if (storedtxt) {
  txt.textContent = storedtxt;
}
