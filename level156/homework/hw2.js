// 2)გვერდზე გაქვს ღილაკი "Toggle Theme"

// დავალება:

// დაჭერისას იცვლება background
// შეინახე არჩეული theme
// refresh-ის შემდეგ იგივე theme დარჩეს

// მინიშნება:

// შეინახე "dark" ან "light"

const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

let theme = localStorage.getItem("theme");

if (theme === "dark") {
  body.style.backgroundColor = "#000";
} else {
  body.style.backgroundColor = "#fff";
}

toggleBtn.addEventListener("click", () => {
  if (theme === "light") {
    theme = "dark";
    body.style.backgroundColor = "#000";
  } else {
    theme = "light";
    body.style.backgroundColor = "#fff";
  }
  localStorage.setItem("theme", theme);
});
