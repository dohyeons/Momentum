const API_KEY = "f9056ecf65ed6b5c4720eae78ab9cc94";
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText =`${data.weather[0].main} / ${data.main.temp}`})

}
function onGeoError() {
    alert('위치정보를 받아올 수 없습니다.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
