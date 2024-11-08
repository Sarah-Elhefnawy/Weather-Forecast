async function getWeatherDay(id = "Cairo") {
        var response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=872302ff72b940a6b76130827240511&q=${id}&days=3&aqi=no&alerts=no`);
    var data = await response.json();
    console.log(data);
    await display(data);
    await display2(data);
    await display3(data);
}
getWeatherDay()

async function display(data){
    let cartona = `
                                <div class="card-header px-3 pb-2 pt-2">
                                    <h6 class="text-center">${data.forecast.forecastday[0].date}</h6>
                                </div><hr>
                                <div class="card-body position-relative px-3 pt-2">
                                    <div class="iconn"><img src="images/176.png" alt=""></div>
                                    <h6 class="card-text">${data.location.name}</h6>
                                    <h1 class="card-title text-center fw-bold pt-2">${data.current.temp_c}°C</h1>
                                    <h6 class="desc pt-3 pb-3 text-primary">${data.current.condition.text}</h6>
                                    <div class="icons">
                                        <span><img src="images/icon-umberella@2x.png" class="px-1" alt="">${data.current.precip_in}%</span>
                                        <span><img src="images/icon-wind@2x.png" class="px-1" alt="">${data.current.wind_kph}km/h</span>
                                        <span><img src="images/icon-compass@2x.png" class="px-1" alt="">${data.current.wind_dir}</span>
                                    </div>
                                </div>`;
                                document.getElementById("card1").innerHTML=cartona
}
async function display2(data){
    let cartonaa = `
                                <div class="card-header px-3 pb-2 pt-2">
                                    <h6>${data.forecast.forecastday[1].date}</h6>
                                </div><hr>
                                <div class="card-body px-3 pb-4">
                                    <div class="iconn"><img src="images/143.png" alt=""></div>
                                    <h1 class="card-title fw-bold">${data.forecast.forecastday[1].day.maxtemp_c}°C</h1>
                                    <h6 class="card-title-two pt-3">${data.forecast.forecastday[1].day.mintemp_c}°C</h6>
                                    <h6 class="desc pt-3 pb-1 text-primary">${data.forecast.forecastday[1].day.condition.text}</h6>
                                </div>`;
                                document.getElementById("card2").innerHTML=cartonaa
}
async function display3(data){
    let cartonaaa = `
                                <div class="card-header px-3 pb-2 pt-2">
                                    <h6>${data.forecast.forecastday[2].date}</h6>
                                </div><hr>
                                <div class="card-body px-3 pb-4">
                                    <div class="iconn"><img src="images/113.png" alt=""></div>
                                    <h1 class="card-title fw-bold">${data.forecast.forecastday[2].day.maxtemp_c}°C</h1>
                                    <h6 class="card-title-two pt-3">${data.forecast.forecastday[2].day.mintemp_c}°C</h6>
                                    <h6 class="desc pt-3 pb-1 text-primary">${data.forecast.forecastday[2].day.condition.text}</h6>
                                </div>`;
                                document.getElementById("card3").innerHTML=cartonaaa
}

let search = document.getElementById('search').addEventListener("input", function(e){
    var targ = e.target.value;
    if (e.target.value==="") {
        getWeatherDay("Cairo")
    }
    else{
        getWeatherDay(targ)
    }
})
let searchBtn = document.getElementById('searchBtn').addEventListener("click", function(){
    let search = document.getElementById('search').value;
    getWeatherDay(search)
})
// keypress