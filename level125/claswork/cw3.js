const body = document.body;

// const p = document.createElement("p");

function updTime() {
  const date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
setInterval(updTime, 1000);
// body.appendChild(p);
