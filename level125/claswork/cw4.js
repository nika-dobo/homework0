const body = document.body;
const p = document.createElement("p");
p.style.fontSize = "100px"

function updTime() {
  const date = new Date();
  p.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

setInterval(updTime, 1000);
body.appendChild(p);
