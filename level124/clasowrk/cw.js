const body = document.body;
const btn = document.getElementById("btn");
const span = document.getElementById("span");
const form = document.getElementById("form");
const inp = document.getElementById("inp");

const collorArr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

let code = "";
for (let i = 0; i < 6; i++) {
  code += collorArr[Math.floor(Math.random() * collorArr.length)];
}
body.style.backgroundColor = `#${code}`;
span.textContent = `#${code}`;
span.style.color = `#${code}`;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (e.target.Color.value.length > 0) {
    code = e.target.Color.value;
    body.style.backgroundColor = `#${code}`;
    span.textContent = `#${code}`;
    span.style.color = `#${code}`;
    if(e.target.Color.value.length != 6){
        code = "Error";
        span.textContent = `${code}`;
        span.style.color = "red";
        body.style.backgroundColor = "red";   
    }
  } else {
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += collorArr[Math.floor(Math.random() * collorArr.length)];
    }
    body.style.backgroundColor = `#${code}`;
    span.textContent = `#${code}`;
    span.style.color = `#${code}`;
  }

  //   code = "";
  //   console.log(e.target.Color.value);

  //   if ((e.target.Color.value = "")) {
  //     for (let i = 0; i < 6; i++) {
  //       code += collorArr[Math.floor(Math.random() * collorArr.length)];
  //     }
  //     body.style.Color = `#${code}`;
  //     span.textContent = `#${code}`;
  //     span.style.Color = `#${code}`;
  //   } else if (e.target.Color.value != "") {
  //     code = e.target.Color.value;
  //     body.style.backgroundColor = `#${code}`;
  //     span.textContent = `#${code}`;
  //     span.style.color = `#${code}`;
  //     console.log("aq");
  //   }
});

// if ((inp.value = "")) {
//   btn.addEventListener("click", function (e) {
//     e.preventDefault();
//     code = "";
//     for (let i = 0; i < 6; i++) {
//       code += collorArr[Math.floor(Math.random() * collorArr.length)];
//     }
//     body.style.Color = `#${code}`;
//     span.textContent = `#${code}`;
//     span.style.Color = `#${code}`;
//   });
// } else if (inp.value != "") {
//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     code = "";
//     code = e.target.Color.value;
//     body.style.backgroundColor = `#${code}`;
//     span.textContent = `#${code}`;
//     span.style.color = `#${code}`;
//   });
// }
