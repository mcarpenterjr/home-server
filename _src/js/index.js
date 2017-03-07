var oWDKey = '8968f560767b83ff6972db1aec284389';
var oWDKey = '8968f560767b83ff6972db1aec284389';
var oWDKey = '8968f560767b83ff6972db1aec284389';
var oWDFCUrl = 'http://api.openweathermap.org/data/2.5/weather';
var oWDFC5DUrl = 'http://api.openweathermap.org/data/2.5/forecast';

function model() {
  var self = this;

  self.locationInfo = ko.observable();

  self.current = ko.observable();

  self.fiveDay = ko.observableArray();

}
var model = new model();

function viewModel() {
  var self = this;

  self.locationData = function(){

  }

  self.fiveDay = function() {
    $.getJSON(oWDFC5DUrl, {
      id: 5280935,
      units: 'imperial',
      APPID: oWDKey,
    }, function(json, textStatus) {
      console.log(json.list);
      model.locationInfo = {
        city: ko.observable(json.city.name),
        country: ko.observable(json.city.country),
        coords: {
          lat: ko.observable(json.city.coord.lat),
          lon: ko.observable(json.city.coord.lon),
        }
      }
      console.log(model.locationInfo);
      model.fiveDay(json.list);
    });
  }

  self.weatherNow = function() {
    $.getJSON(oWDFCUrl, {
      id: 5280935,
      units: 'imperial',
      APPID: oWDKey,
    },
    function(json, textStatus) {
      console.log(json);
      model.current = {
        main: {
          temp: ko.observable(json.main.temp),
          humidity: ko.observable(json.main.humidity),
          temp_min: ko.observable(json.main.temp_min),
          temp_max: ko.observable(json.main.temp_max)
        },
        wind: {
          speed: ko.observable(json.wind.speed),
          deg: ko.observable(json.wind.deg)
        },
        clouds: {
          all: ko.observable(json.clouds.all)
        },
        // rain: {
        //   past: ko.observable(json.rain.3h)
        // },
        // snow: {
        //   past: ko.observable(json.snow.3h)
        // },
        id: ko.observable(json.id),
        name: ko.observable(json.name)
      };
      console.log(model.current);
    });
  }

}
var app = new viewModel();

function init() {
  app.weatherNow();
  app.fiveDay();
}

ko.applyBindings(model);
