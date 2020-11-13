/*  Nombre del autor: Diego Manuel salas Rayas
    Fecha y hora: 10/101/2020 */
$(document).ready(function() {
    var element = $('meta[name="active-menu"]').attr('content');
    $('#' + element).addClass('active');
   });
   
   function geoFindMe() {
    var output = document.getElementById("out");
  
    if (!navigator.geolocation){
      output.innerHTML = "<p>Su navegador no admite la geolocalización</p>";
      return;
    }
  
    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
  
      output.innerHTML = '<p>LA LATITUD ES= ' + latitude + '° <br>LA LONGITUD ES: ' + longitude + '°</p>';
  

    };
  
    function error() {
      output.innerHTML = "No se puede recuperar su ubicación";
    };
  
    output.innerHTML = "<p>cargndo</p>";
  
    navigator.geolocation.getCurrentPosition(success, error);
  };
   
  var unirest = require("unirest");

  var req = unirest("GET", "https://rapidapi.p.rapidapi.com/weather");
  
  req.query({
      "q": "London,uk",
      "lat": "0",
      "lon": "0",
      "callback": "test",
      "id": "2172797",
      "lang": "null",
      "units": "\"metric\" or \"imperial\"",
      "mode": "xml, html"
  });
  
  req.headers({
      "x-rapidapi-key": "895e736165msh3b0cc95c25e6365p12f4cbjsn759afbc8872c",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "useQueryString": true
  });
  
  
  req.end(function (res) {
      if (res.error) throw new Error(res.error);
  
      console.log(res.body);
  });

  