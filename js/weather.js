const loadCountry = () => {
    const searchField = document.getElementById('searchField');
    const searchValue = searchField.value;
    console.log(searchValue);
    searchValue.value = '';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=60c628ccbbf715893d1e380a1e05cd88
`

    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data));
}


const displayWeather = weather => {
    const cityWeather = document.getElementById('city-weather');
    cityWeather.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
        <h1>${weather.name}</h1>
        <h3><span>${weather.main.temp}</span>&deg;C</h3>
        <h1 class="lead">${weather.weather[0].description}</h1>
    `
    cityWeather.appendChild(div);
}