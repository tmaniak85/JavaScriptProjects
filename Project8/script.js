const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=d044a59206074f0341c835f7f6a8a093'
const API_UNITS = '&units=metric'


const getWeather = () => {
    const city = input.value
    const URL = API_LINK + city + API_KEY + API_UNITS

    axios.get(URL).then(res => {
        const temp = res.data.main.temp
        const hum = res.data.main.humidity
        const status = Object.assign({}, ...res.data.weather)
        let imgName

        if (status.id >= 200 && status.id <= 232) {
            imgName = 'thunderstorm.png'
        } else if (status.id >= 300 && status.id <= 321) {
            imgName = 'drizzle.png'
        } else if (status.id >= 500 && status.id <= 531) {
            imgName = 'rain.png'
        } else if (status.id >= 600 && status.id <= 622) {
            imgName = 'ice.png'
        } else if (status.id >= 701 && status.id <= 781) {
            imgName = 'fog.png'
        } else if (status.id === 800) {
            imgName = 'sun.png'
        } else if (status.id >= 801 && status.id <= 804) {
            imgName = 'cloud.png'
        } else {
            imgName = 'unknown.png'
        }

        photo.setAttribute('src', './img/' + imgName)

        cityName.textContent = res.data.name
        temperature.textContent = Math.floor(temp) + 'C'
        humidity.textContent = hum + '%'
        weather.textContent = status.main
        warning.textContent = ''
        input.value = ''
    }).catch(() => {
        warning.textContent = 'Wpisz poprawną nazwę miasta!'
    })
}

const enterKeyCheck = (e) => {
    if(e.key === 'Enter') {
        getWeather()
    }
}

button.addEventListener('click', getWeather)
input.addEventListener('keyup', enterKeyCheck)
