const btn = document.getElementById("fetchBtn");
const resultDiv = document.getElementById("result");

btn.addEventListener("click", async () => {
  try {
    resultDiv.innerHTML = "<em>იტვირთება...</em>";

    const response = await fetch("https://catfact.ninja/fact");

    const data = await response.json();

    resultDiv.innerHTML = `<strong>ფაქტი:</strong> ${data.fact}`;
  } catch (error) {
    resultDiv.innerHTML = `<span style="color: red;">შეცდომა: მონაცემები ვერ ჩაიტვირთება</span>`;
  }
});
