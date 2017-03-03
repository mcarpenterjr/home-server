var oWDKey = '8968f560767b83ff6972db1aec284389';
var oWDFCUrl = 'http://api.openweathermap.org/data/2.5/weather';

$.getJSON(oWDFCUrl, {
  id: 5280935,
  units: 'imperial',
  APPID: oWDKey,
  },
  function(json, textStatus) {
    console.log(json);
    $('.weather-current').append('<ul class="conditions"></ul>');
    $('.conditions').append('<li><span class="label label-success">Current Temp:</span> <span class="badge">' + json.main.temp + '</span></li>');
    $('.conditions').append('<li>Humidity: ' + json.main.humidity + '%</li>');
    $('.conditions').append('<li>Pressure: ' + json.main.pressure + '<sup>bar</sup></li>');
    $('.conditions').append('<li>Temperature: ' + json.main.temp_max + '<sup>HIGH</sup></li>');
    $('.conditions').append('<li>Temperature: ' + json.main.temp_min + '<sup>LOW</sup></li>');
});
