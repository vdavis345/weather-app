const showWeather = (data) =>{
    //saving the temperature to a variable
    const current_weather = data.current.temp_f
    //saving the condition to a variable
    const condition = data.current.condition.text
    //changing the html of the element with an id of weather-value to current_weather
    $("#weather-value").html(current_weather)
    //changing the html of the element with an id of condition to condition
    $("#condition").html(condition)
}
// the function that takes in the apiKey and city and gets the weather data
const getWeather = (apiKey, city) =>{
    //builds the url string with the apiKey and city
    const weatherURL = "https://api.apixu.com/v1/current.json?key=" + apiKey + "&q=" + city
    //makes an ajax call to the weatherURL and calls the showWeather function with the data that comes back
    $.ajax({
        url: weatherURL,
        success: showWeather
    })
}
//boilerplate function that gets called when the DOM is ready
$(document).ready(function() {
    // saving the apiKey to a variable
    const apiKey = "c7d12fb1922641db99b25129171412"
    //puts an eventlistener on the element that has an id of get-weather
    $("#get-weather").on("click", function(){
        //grab the value that is in the input with an id of city, saves it to city
        let city = $("#city").val()
        //calls the getWeather function with the apiKey and city
        getWeather(apiKey, city)
    })
});

 
