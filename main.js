
var genQuote = "";
var genAuthor = "";

$(document).ready(function(){

  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"), function(json) {
    var arr = JSON.parse(response);
    $('#quote').html("<h2>" + arr + "</h2>");

  }

  var colors = ['#e67e22', '#3498db', '#9b59b6', '#e74c3c', '#2c3e50'];

  var primColor = colors[Math.floor(Math.random() * colors.length)];

  $('body').css({'background': '' + primColor});
  $('#quotebox').css({'color': '' + primColor});
  $('#creditbox').css({'color': '' + primColor});
  $('button').css({'background': '' + primColor});

  $("#newQuote").on("click", function() {
      $('#quote').html("<h2>lakdjf;laskdjf;asldkfj</h2>");
  });


});
