const apiKey="70aef8581a3ed9d340566828999dbdee";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('#search input')
const searchBtn = document.querySelector('#search button')


async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)
    let data = await response.json()
    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "*C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "m/s";
}

searchBtn.addEventListener('click',  () => {
    checkWeather(searchBox.value);
})
searchBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});

function clearDisplay(){
    document.querySelector(".city").innerHTML = " ";
    document.querySelector(".temp").innerHTML = " ";
    document.querySelector(".humidity").innerHTML = " ";
    document.querySelector(".wind").innerHTML = " ";
    searchBox.value = " ";
     
}


