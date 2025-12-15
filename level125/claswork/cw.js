body = document.body;

btn = document.createElement("button");
btn.textContent = "click me";

btn.addEventListener("click", function () {
  date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
});

body.appendChild(btn);
