$(document).ready(function(){

  var colors = ['#e67e22', '#3498db', '#9b59b6', '#e74c3c', '#2c3e50'];

  $('body').css({'background': '' + colors[Math.floor(Math.random() * colors.length)]});

});
