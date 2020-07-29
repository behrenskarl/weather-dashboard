// //search bar needs to take user text and perform an API search and display results

// //reference this from a weather API app

//     // This is our API key
//     var APIKey = "166a433c57516f51dfab1f7edaed8413";

//     // Here we are building the URL we need to query the database
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
//       "q=Bujumbura,Burundi&appid=" + APIKey;

//     // Here we run our AJAX call to the OpenWeatherMap API
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       // We store all of the retrieved data inside of an object called "response"
//       .then(function(response) {

//         // Log the queryURL
//         console.log(queryURL);

//         // Log the resulting object
//         console.log(response);

//         // Transfer content to HTML
//         $(".city").html("<h1>" + response.name + " Weather Details</h1>");
//         $(".wind").text("Wind Speed: " + response.wind.speed);
//         $(".humidity").text("Humidity: " + response.main.humidity);
        
//         // Convert the temp to fahrenheit
//         var tempF = (response.main.temp - 273.15) * 1.80 + 32;

//         // add temp content to html
//         $(".temp").text("Temperature (K) " + response.main.temp);
//         $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

//         // Log the data in the console as well
//         console.log("Wind Speed: " + response.wind.speed);
//         console.log("Humidity: " + response.main.humidity);
//         console.log("Temperature (F): " + tempF);
//       });



// //want the previous searches (local storage) to display as buttons that can be clicked to show current weather

// //reference this from the movie app 

//       // Function for displaying movie data
//       function renderButtons() {

//         // Deleting the movies prior to adding new movies
//         // (this is necessary otherwise you will have repeat buttons)
//         $("#buttons-view").empty();

//         // Looping through the array of movies
//         for (var i = 0; i < movies.length; i++) {

//           // Then dynamicaly generating buttons for each movie in the array
//           // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//           var a = $("<button>");
//           // Adding a class of movie-btn to our button
//           a.addClass("movie-btn");
//           // Adding a data-attribute
//           a.attr("data-name", movies[i]);
//           // Providing the initial button text
//           a.text(movies[i]);
//           // Adding the button to the buttons-view div
//           $("#buttons-view").append(a);
//         }
//       }

//       // This function handles events where a movie button is clicked
//       $("#add-movie").on("click", function(event) {
//         event.preventDefault();
//         // This line grabs the input from the textbox
//         var movie = $("#movie-input").val().trim();

//         // Adding movie from the textbox to our array
//         movies.push(movie);

//         // Calling renderButtons which handles the processing of our movie array
//         renderButtons();
//       });

//       // Adding a click event listener to all elements with a class of "movie-btn"
//       $(document).on("click", ".movie-btn", displayMovieInfo);

//       // Calling the renderButtons function to display the initial buttons
//       renderButtons();
   


//       //html for search bar and rendering previous searches as buttons
//       <div id="buttons-view"></div>

//       <form id="location-form">
//         <label for="user-input">search city..</label>
//         <input type="text" id="user-input">
//         <br>
  
//         {/* <!-- Button triggers new movie to be added --> */}
//         <input id="add-city" type="submit" value="search city..">
//       </form>

//     <form class="example" action="action_page.php">
//         <input type="text" id="user-input" placeholder="Search.." name="search">
//         <button type="submit"><i class="fa fa-search"></i></button>
//     </form>




//gregs help

{/* <script type="text/javascript">
$("#user-submit").click(function() {
  var userInput = $("#user-input")
    .val()
    .trim();
  if (userInput.length === 0) {
    console.log("Nothing in input!");
    return;
  }
  var APIKey = "bc008bac3394c3179b12d844fcba2049";

  var queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?" +
    "q=" +
    userInput +
    "&APPID=" +
                APIKey;

                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function(response) {
                    console.log(response);
                    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".date").text(response.date);
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".uv-index").text("UV Index: " + uvQuery);
                    var tempF = convertToFarenheit(response.main.temp);

// add temp content to html

                            $(".tempF").text("Temperature: " + tempF.toFixed(2)) + "(F)";
                            
                        var uvQueryURL = "http://api.openweathermap.org/data/2.5/uvi?appId=" 
                                                            + APIKey 
                                                            + "&lat=" 
                                                            + response.city.coord.lat 
                                                            + "&lon=" 
                                                            + respsonse.city.coord.lon;

                    $.ajax({
                        url: uvQueryURL,
                        method: "GET"	
                    })
                    .then(function(response2) {
                    var uvIndex = response2
                    // Do more stuff!
                        console.log(response2);
                    })
                })
        });

    function convertToFarenheit(temp) {
        return (temp - 273.15) * 1.8 * 32;
    } */}
