body = document.body;

btn = document.createElement("button");
btn.textContent = "click me";

btn.addEventListener("click", function () {
  date = new Date();
  p = document.createElement("p");
  p.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  body.appendChild(p);
});

body.appendChild(btn);
