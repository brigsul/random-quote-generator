
var genQuote = {};
var genAuthor = "";
var tweetquote = "";

function fetchQuote(){
  $.ajax({
    type:"GET",
    dataType:"json",
    url:"http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
    success:function(response){
      console.log(response);
      $('#quote').html(' " ' + response.quoteText);
      tweetquote = response.quoteText;//.replace(/ /g,'%20').replace(/,/g, '%2C').replace(/\?/g, '%3F').replace(/\./g,'%2E');
      console.log(tweetquote);
      $('tweetthis').attr('data-text', tweetquote);
      if (response.quoteAuthor == ''){
        $('#author').html(' - Unknown');
      }
      else {
        $('#author').html(' - ' + response.quoteAuthor);
      }
    }
  });
}

var colors = ['#e67e22', '#3498db', '#9b59b6', '#e74c3c', '#2c3e50'];

var primColor = colors[Math.floor(Math.random() * colors.length)];

function newColor(){
  primColor = colors[Math.floor(Math.random() * colors.length)];
  $('body').css({'background': '' + primColor});
  $('#quotebox').css({'color': '' + primColor});
  $('#creditbox').css({'color': '' + primColor});
  $('button').css({'background': '' + primColor});
}

$(document).ready(function(){

  newColor();
  fetchQuote();

  $("#newQuote").on("click", function() {
    newColor();
    fetchQuote();

  });


});
