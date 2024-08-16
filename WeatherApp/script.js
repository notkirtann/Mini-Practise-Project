const apiKey="70aef8581a3ed9d340566828999dbdee";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('#search input')
const searchBtn = document.querySelector('#search button')
const weatheIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)
    let data = await response.json()
    
    weatheIcon.src = "images/rain.png"
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "*C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "m/s";

    if(data.weather[0].main == "Clouds"){
        weatheIcon.src = "images/Clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatheIcon.src = "images/Clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatheIcon.src = "images/Clouds.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatheIcon.src = "images/Clouds.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatheIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatheIcon.src = "images/Mist.png"
    }
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
    weatheIcon.src = " ";
     
}


