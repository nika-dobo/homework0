const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let accInfo = {
    name: e.target.name.value.trim(),
    email: e.target.email.value.trim(),
    phone: e.target.phone.value.trim(),
    password: e.target.password.value.trim(),
  };

  
  
});



// 1.რეგისტრაცია (Sign Up, Sign In) + (1.5: localstorage)
// 2.შესვლის თანავე უნდა იყოს 20 პროდუქტის ჩამონათვალი
// 3.პროდუქტზე ინფორმაცია