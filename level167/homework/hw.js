const h1City = document.getElementById("ctiy-name");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const form = document.getElementById("form");
const weather = document.getElementById("weather");

function weatherapi(city) {
  let http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let response = JSON.parse(this.responseText);
      h1City.textContent = city;
      temperature.textContent = `${response.current.temp_c}`;
      wind.textContent = `${response.current.wind_kph}`;
      weather.textContent = response.current.condition.text
      console.log(response);
    }
  };

  let api = `http://api.weatherapi.com/v1/current.json?key=c8ced2d4f4a741e597a174639260106&q=${city}&aqi=no`;

  http.open("GET", api);
  http.send();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let city = e.target.city.value;
  console.log(city);
  weatherapi(city);
});
