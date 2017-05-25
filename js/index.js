$(document).ready(function() {

  var currentQuote = "";
  var quoteArray = [{
    quote: "Don't look into your neighbour's bowl to compare how much you have. Only ever look to make sure that they have enough.",
    person: "Louis CK"
  }, {
    quote: "The pessimist complains about the wind. The optimist expects it to change. The realist adjusts the sails.",
    person: "William A. Ward"
  }, {
    quote: "WUBALUBADUBDUB",
    person: "Rick Sanchez"
  }];

  function makeQuote() {
    var randomIndex = Math.floor((Math.random() * quoteArray.length));
    //TODO: need to make sure that new random number is not the same as previous random number
    currentQuote = quoteArray[randomIndex];
    $("#tweetQuote").attr("href", "https://twitter.com/intent/tweet?text=" + currentQuote.quote + " -" + currentQuote.person);
    $(".quote").html("\"" + currentQuote.quote + "\" " + "<i>" + currentQuote.person) + "</i>";
  }

  makeQuote();

  $("#getQuote").on("click", function() {
    makeQuote();
  });

});
/*TODO
1. More quotes
2. never the same quote twice
3. Fix buttons' positions
*/