//adding a listener the two buttons that will call a function that is defined in the nav-global js file
$("#main-nav li button").on("click", hideShowMainNav);

// adds event listener for the scroll to plugin
$("#main-nav li button").on("click", scrollIndex);

// $("#planning-btn").on("click", scrollPlanning);

// $("#weather-btn").on("click", scrollWeather);