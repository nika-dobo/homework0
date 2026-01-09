document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  function errorInput(input) {
    input.value = "";
    input.style.borderColor = "red";
  }

  function clearError(input) {
    input.style.borderColor = "";
  }

  function checkName() {
    const name = document.getElementById("name");
    clearError(name);

    document.getElementById("card-name").textContent = name.value;

    if (name.value.length < 3) {
      errorInput(name);
    }
  }

  function checkCard() {
    const card = document.getElementById("card-id");
    clearError(card);

    document.getElementById("id").textContent = card.value;

    if (card.value.length !== 16 || isNaN(card.value)) {
      errorInput(card);
    }
  }

  function checkMonth() {
    const mm = document.getElementById("mm");
    clearError(mm);

    document.getElementById("ma").textContent = mm.value;

    if (
      mm.value.length !== 2 ||
      isNaN(mm.value) ||
      mm.value < 1 ||
      mm.value > 12
    ) {
      errorInput(mm);
    }
  }

  function checkYear() {
    const yy = document.getElementById("yy");
    clearError(yy);

    document.getElementById("yr").textContent = yy.value;

    if (yy.value.length !== 2 || isNaN(yy.value)) {
      errorInput(yy);
    }
  }

  function checkCVC() {
    const cvc = document.getElementById("cvc");
    clearError(cvc);

    document.getElementById("cvv").textContent = cvc.value;

    if (cvc.value.length !== 3 || isNaN(cvc.value)) {
      errorInput(cvc);
    }
  }

  checkName();
  checkCard();
  checkMonth();
  checkYear();
  checkCVC();
});
