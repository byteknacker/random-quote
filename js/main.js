$(document).ready(function() {
    // This block below loads a random quote from http://forismatic.com/ on page being fully loaded
    var randomNumber = Math.floor(Math.random() * (40151 - 2 + 1)) + 2;
    var requestString = "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&key=";
    requestString += randomNumber;
    $.getJSON(requestString, function (json) {
        var html = "<p class = 'quote-p'>";
        html += json["quoteText"];
        html += "</p>";
        authorText = json["quoteAuthor"];
        html += "<footer><cite title='Autho'>";
        html += authorText;
        html += "</cite></footer>";
        $("#quote-text").html(html);
    });
    // The above block loads a random quote from http://forismatic.com/ on page being fully loaded

    // The block below updates the quote with a new random quote after clicking the button with id = getMessage
    $("#getMessage").on("click", function() {
        // Create a random number
        var randomNumber = Math.floor(Math.random() * (40151 - 2 + 1)) + 2;
        // Set the base string for HTTP request with a HTTPS CORS proxy so Heroku and Codepen all work out
        var requestString = "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&key=";
        // Add the key number otherwise the CORS proxy does not update random quote text
        requestString += randomNumber;
        // Block to generate the HTML inside the blockquote tag with class = quote-text
        $.getJSON(requestString, function (json) {
            var html = "<p class = 'quote-p'>";
            html += json["quoteText"];
            html += "</p>";
            authorText = json["quoteAuthor"];
            html += "<footer><cite title='Autho'>";
            html += authorText;
            html += "</cite></footer>";
            $("#quote-text").html(html);
        });
    });
    // The above block updates the quote with a new random quote after clicking the button with id = getMessage
});
