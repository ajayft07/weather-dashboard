const API_KEY = "YOUR_API_KEY";

async function getWeather() {

const city =
document.getElementById("cityInput").value;

if(!city){
alert("Enter city name");
return;
}

try{

const response =
await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
);

if(!response.ok){
throw new Error("City not found");
}

const data = await response.json();

document.getElementById("city").innerText =
data.name;

document.getElementById("temp").innerText =
Math.round(data.main.temp) + "°C";

document.getElementById("condition").innerText =
data.weather[0].main;

document.getElementById("humidity").innerText =
data.main.humidity + "%";

document.getElementById("wind").innerText =
data.wind.speed + " km/h";

document.getElementById("visibility").innerText =
(data.visibility/1000) + " km";

document.getElementById("icon").src =
`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

}
catch(error){
alert(error.message);
}
}
