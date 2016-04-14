if("geolocation" in navigator){
  navigation.geolaction.getCurrentPosition(function(){
    loadWeather(position.coords.latitude + ',' + position.coords.longitude);

});
}else{
  loadWeather("Kolkata,IN", "");
}


$(document).ready(function(){
  setInterval(getWeather,10000);
}

function loadWeather(location,woeid){
$.simpleWeather({
  location:location,
  woeid:woeid,
  unit:'c',
  success:function(weather){
    city = weather.city;
    temp = weather.temp+'&deg;';
    wcode = '<img class="weathericon" src="images/weathericons/' + weather.code + '.svg">';
    wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
    humidity = weather.humidity +'%';
  }
})
}

)