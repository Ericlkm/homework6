let apiKey = "436e34371c64a3df27ce392964908c75";

var cityName;
var storage = document.getElementById("localstorage");




function displayData(){
let apiUrl2 = `HTTPS://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
fetch(apiUrl2)
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data)
    console.log(data.city.name)
    $("#current-city").text(`${data.city.name} (current)`)
    data.list[0].main.temp = Math.round(data.list[0].main.temp - 273.15 +32)
    $("#current-temp").text(`temp: ${data.list[0].main.temp}°c`)
    $("#current-windspeed").text(`wind speed: ${ data.list[0].wind.speed}mph`)
    $("#current-humidity").text(`Humidity: ${ data.list[0].main.humidity}%`)   
    

    let forecastDays =[];
    let fiveDforecast = data.list.filter(function(forecast){
        let forcastDate = new Date(forecast.dt_txt).getDate()
        if(!forecastDays.includes(forcastDate)){
            return forecastDays.push(forcastDate);
        }
    })
    console.log(fiveDforecast)
    data.list[1].main.temp = Math.round(data.list[1].main.temp - 273.15 +32)
    data.list[2].main.temp = Math.round(data.list[2].main.temp - 273.15 +32)
    data.list[3].main.temp = Math.round(data.list[3].main.temp - 273.15 +32)
    data.list[4].main.temp = Math.round(data.list[4].main.temp - 273.15 +32)

 $("#weather-1").append(`
        <h3>${fiveDforecast[1].dt_txt.slice(0,-8)}</h3><br>
        <h4>Temp: ${ data.list[1].main.temp}°c</h4><br>
        <h4>Humidity: ${ data.list[1].main.humidity}%</h4><br>
        <h4>Wind speed: ${ data.list[1].wind.speed}mph</h4>
    `)
    
    $("#weather-2").append(`
    <h3>${fiveDforecast[2].dt_txt.slice(0,-8)}</h3><br>
    <h4>Temp: ${ data.list[2].main.temp}°c</h4><br>
    <h4>Humidity: ${ data.list[2].main.humidity}%</h4><br>
    <h4>Wind speed: ${ data.list[2].wind.speed}mph</h4>
`)
$("#weather-3").append(`
<h3>${fiveDforecast[3].dt_txt.slice(0,-8)}</h3><br>
<h4>Temp: ${ data.list[3].main.temp}°c</h4><br>
<h4>Humidity: ${ data.list[3].main.humidity}%</h4><br>
<h4>Wind speed: ${ data.list[3].wind.speed}mph</h4>
`)
$("#weather-4").append(`
<h3>${fiveDforecast[4].dt_txt.slice(0,-8)}</h3><br>
<h4>Temp: ${ data.list[4].main.temp}°c</h4><br>
<h4>Humidity: ${ data.list[4].main.humidity}%</h4><br>
<h4>Wind speed: ${ data.list[4].wind.speed}mph</h4>
`)
$("#weather-5").append(`
<h3>${fiveDforecast[5].dt_txt.slice(0,-8)}</h3><br>
<h4>Temp: ${ data.list[5].main.temp}°c</h4><br>
<h4>Humidity: ${ data.list[5].main.humidity}%</h4><br>
<h4>Wind speed: ${ data.list[5].wind.speed}mph</h4>
`)
})
}

 


$("#searchbtn").click(function(){
    reset()
   cityName = $("#search-input").val();
   if(!cityName){return;}
   displayData()
   seachCities()
   $(".weather-box").removeClass("hide").slideDown(1000)
   $(".weather-box").addClass("show").slideDown(1000)
   $("#current-weather").addClass("show").slideDown(1000)
   storage=localStorage.getItem("city")

})

function reset(){
    $(".weather-box").empty()
}

function seachCities(){
    localStorage.setItem("city", cityName);
    storage=localStorage.getItem("city")
    $("#localstorage").each(function(){
        var createbtn = $("<button><br>").addClass("storagebtn").text(cityName);
        $("#localstorage").append(createbtn)
    })
}





