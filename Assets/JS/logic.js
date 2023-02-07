$(document).ready(function () {
  let apiKey = "915689ad0447cc832e74563ad3f9a509";
  // let WeatherURL =
  //   "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=915689ad0447cc832e74563ad3f9a509";

  let searchButton = $("#search-button");
  let displayCities = $("#Search-card");
  let cities = [];
  let city;

  // function for current date
  function displayDate() {
    var dateEl = moment().format("DD MMMM YYYY");
    $("#current-date").text(dateEl);
  }
  displayDate();

  function getRecentInput() {
    const lastInput = localStorage.getItem("latestSearch");
    if (lastInput) {
      city = lastInput;
      searchWeather();
    }
  }

  // Function to get users input and store it into local storage
  function storeInputCities() {
    localStorage.setItem("cities", JSON.stringify(cities));
  }

  //function for rendering buttons
  // function displayButtons() {
  //   if (cities) {
  //   }
  // }

    function searchWeather() {
      
      $.ajax({
        url:
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          cityName +
          "&units=imperial&appid=915689ad0447cc832e74563ad3f9a509",
        method: "get",
      });
    }
});
