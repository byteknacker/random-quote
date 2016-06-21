$(document).ready(function() {
    $("#getMessage").on("click", function() {
        $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en", function (json) {
            $("#quote-text").html(JSON.stringify(json));
        });
    });
});
