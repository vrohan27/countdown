const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const apikey = "go on openweather site and get your";
const url = (city)=>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city){
    const resp = await fetch(url(city),{origin : "cors"});
    const respData = await resp.json();
    // console.log(respData, KtoC(respData.main.temp));
    console.log(respData);

    addWeatherToPage(respData);
}
// getWeatherByLocation('India');

function addWeatherToPage(data){
    const temp = KtoC(data.main.temp);
    
    const weather = document.createElement('div')
    weather.classList.add('weather');

    weather.innerHTML = `
    <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
     ${temp}°C 
     <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
    
    <small>in ${search.value}</small>
    `;
    main.innerHTML = "";
    main.appendChild(weather);
}

function KtoC(n){
    return (n-273.15).toFixed(2); 

}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location1 = search.value;

    if(location1){
        getWeatherByLocation(location1);
    }

});