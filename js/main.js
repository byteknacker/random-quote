var quoteFunction = function () {
    // Create a random number
    var randomNumber = Math.floor(Math.random() * (40151 - 2 + 1)) + 2;
    // Set the base string for HTTP request with a HTTPS CORS proxy so Heroku and Codepen all work out
    var requestString = "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&key=";
    // Add the key number otherwise the CORS proxy does not update random quote text
    requestString += randomNumber;
    // Block to generate the HTML inside the blockquote tag with class = quote-text
    $.getJSON(requestString, function (json) {
        var html = "<p class = 'quote-p'>";
        html += json.quoteText;
        html += "</p>";
        if (json.quoteAuthor.length < 2) {
            var authorText = "Anonymous";
        } else {
            var authorText = json.quoteAuthor;
        }
        html += "<footer><cite title='Autho'>";
        html += authorText;
        html += "</cite></footer>";
        var twitterQuoteText = '"' + json.quoteText + '"' + ' - ' + authorText;
        $("#quote-text").html(html);
        if (twitterQuoteText.length < 128) {
            $("#twitter-button").attr("src", 'https://platform.twitter.com/widgets/tweet_button.html?size=l&relted=twitterapi%2Ctwitter&hashtags=inspire&text=' + twitterQuoteText);
        } else {
            $("#twitter-button").attr("src", 'https://platform.twitter.com/widgets/tweet_button.html?size=l&relted=twitterapi%2Ctwitter&hashtags=inspire&url=https://random-quote-machine.herokuapp.com/&text=Checkout%20this%20awesome%20quote%3A%20');
        }
    });
};

$(document).ready(function () {
    // Create a random quote upon loading of page so that it is not empty when loaded but no button clicked.
    quoteFunction();
    // The block below updates the quote with a new random quote after clicking the button with id = getMessage
    $("#getMessage").on("click", function () {
        quoteFunction();
    });
});
