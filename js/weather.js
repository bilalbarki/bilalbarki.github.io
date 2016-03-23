//for updating the weather

document.addEventListener("DOMContentLoaded", function() {
jsonp();
document.getElementById('updateWeather').onclick =function() {
	jsonp();	//call this function again if clicked
};



});

function jsonp(){
var script = document.createElement('script');
script.src = 'https://holberton-weather-api.herokuapp.com/weather.js?jsonp_callback=weatherSuccess'
//document.body.appendChild(script);
document.getElementsByTagName('head')[0].appendChild(script);
}

function weatherSuccess(data)
{
    document.getElementById('weather').innerHTML=data['current_weather'];

}
