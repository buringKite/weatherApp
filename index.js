$(document).ready(() => {
  $("#citySumbit").click(function () {
    // if (city != "") {
    // } else {
    //   alert("enter a city name");
    // }

    let city = $("#city").val();

    const queryURL =
      "https://api.openweathermap.org/data/2.5/forecast/?q=" +
      city +
      "&units=imperial&&appid=fa3026ffedb0a89a5f016059a673f69f";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      let chart = cityWeather(response);
      $("#weatherResult").html(chart);
      let cord = response.city.coord;
      // $("#city").val("");
    });
  });

  function cityWeather(response) {
    return (
      "<h5> " +
      response.city.name +
      ", " +
      response.city.country +
      "</h5>" +
      "<p> tempature:" +
      response.list[0].main.temp +
      " °F</p>" +
      "<p> Humidity:  " +
      response.list[0].main.humidity +
      "% </p>" +
      "<p> Wind Speed: " +
      response.list[0].wind.speed +
      "MPH </p>"
    );
  }
});
// "http://api.openweathermap.org/data/2.5/uvi/forecast?q=" +
// city +
// "&lat=" +
// lat +
// "&lon" +
// lon +
// "units=imperial&appid=fa3026ffedb0a89a5f016059a673f69f"
// let lat = city.coord.lat;
// let lon = city.coord.lon;
