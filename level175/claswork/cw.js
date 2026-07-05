// შექმენით ფუნქცია რომელიც დააბრუნებს რაიმე ავტომობილის სახელს 2 წამში

// შენი დავალებაა რომ ეს დარესოლვებული მნშვნელობა გამოიტანო კონსოლში

// გამოიყენე async await ქივორდები .then ის მაგივრად

function getCarName() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("BMW");
    }, 2000);
  });
}

async function displayCarName() {
  const carName = await getCarName();
  console.log(carName);
}

displayCarName();

