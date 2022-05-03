const input = document.querySelector('input');
const button = document.querySelector('button');
const cityName = document.querySelector('.cityName');
const image = document.querySelector('img');
const temperature = document.querySelector('.weather');
const feelsTemperature = document.querySelector('.feelsWeather');
const pressure = document.querySelector('.pressure');
const windSpeed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '&appid=1c614c38363a152763dbf53c66b80112'
const apiUnits = '&units=metric'

const checkWeather = () => {
    const City = input.value
    const URL = apiLink + City + apiKey + apiUnits

    axios.get(URL).then(Response => {
        console.log(Response.data)
        const temp = Response.data.main.temp
        const feelstemp = Response.data.main.feels_like
        const press = Response.data.main.pressure
        const humid = Response.data.main.humidity
        const winspeed = Response.data.wind.speed
    

        cityName.textContent = `${Response.data.name}, ${Response.data.sys.country}`

        temperature.textContent = Math.floor(temp) + '°C'
        // temperature.textContent = `${Math.floor(temp)}'°C`
        feelsTemperature.textContent = Math.floor(feelstemp) + '°C'
        pressure.textContent = Math.floor(press) + ' hPa'
        humidity.textContent = Math.floor(humid) + ' %'
        windSpeed.textContent = Math.floor(winspeed) + ' km/s'
        // image.setAttribute('src', `./img/${Response.data.weather[0].icon}.png`)
        image.setAttribute('src', `https://openweathermap.org/img/w/${Response.data.weather[0].icon}.png`)

        input.value = ''

    })

}
button.addEventListener('click', checkWeather)