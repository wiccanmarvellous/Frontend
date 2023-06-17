const container = document.querySelector('.container')
const search = document.querySelector('.search-box button')
const weatherBox = document.querySelector('.weather-box')
const weatherDetails = document.querySelector('.weather-details')
const error404 = document.querySelector('.not-found')

search.addEventListener('click', () => {
    const APIKey = 'e29bf596c79edeaebfaad2b98493204b';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fade-in');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fade-in');

            const image = document.querySelector('.weather-box span');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.innerHTML = '<i class="fa-solid fa-sun fa-2xl" style="color: #1b949d;"></i>';
                    break;
                case 'Rain':
                    image.innerHTML = '<i class="fa-solid fa-cloud-rain fa-2xl" style="color: #1b949d;"></i>';
                    break;
                case 'Snow':
                    image.innerHTML = '<i class="fa-solid fa-snowflake fa-2xl" style="color: #1b949d;"></i>';
                    break;
                case 'Clouds':
                    image.innerHTML = '<i class="fa-solid fa-cloud fa-2xl" style="color: #1b949d;"></i>';
                    break;
                case 'Haze':
                    image.innerHTML = '<i class="fa-solid fa-sun-haze fa-2xl" style="color: #1b949d;"></i>';
                    break;
                default:
                    image.innerHTML = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fade-in');
            weatherDetails.classList.add('fade-in');
            container.style.height = '590px';
        });
});