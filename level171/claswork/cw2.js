const img = document.getElementById("img");
const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const adress = document.getElementById("adress");
const birthDate = document.getElementById("birthDate");

const prom = new Promise((resolve, reject) => {
  const api = {
    name: "nikola",
    lastName: "tesla",
    phone: "599 33 11 88",
    email: "nikolats@gamil.com",
    adress: "Tbilisi, Georgia",
    birthDate: "10 jule 1856",
    profilImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg",
  };
  setTimeout(() => {
    resolve(api);
  }, 1000);
});

prom
  .then((result) => {
    img.src = result.profilImage;
    name.textContent = result.name;
    lastName.textContent = result.lastName;
    email.textContent = result.email;
    phone.textContent = result.phone;
    adress.textContent = result.adress;
    birthDate.textContent = result.birthDate;
    console.log("sucsses");
  })
  .catch((error) => {
    name.textContent = "error";
    lastName.textContent = "error";
    email.textContent = "error";
    phone.textContent = "error";
    adress.textContent = "error";
    birthDate.textContent = "error";
    console.log("error");
  });
