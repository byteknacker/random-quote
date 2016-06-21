$(document).ready(function() {
    $("#getMessage").on("click", function() {
        var randomNumber = Math.floor(Math.random() * (40151 - 2 + 1)) + 2;
        var requestString = "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&key=";
        requestString += randomNumber;
        $.getJSON(requestString, function (json) {
            var html = "<p class = 'quote-p'>";
            html += json["quoteText"];
            html += "</p>"
            html += "<footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>"
            $("#quote-text").html(html);
        });
    });
});
