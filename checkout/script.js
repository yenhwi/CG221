$(document).ready(function(){
  alert("Please read carefully and fill out all of the questions")
  //alert ("you made it!")
});

$(document).ready(function() {
    $( "#accordion" ).accordion();
});

$( function() {
    $( "#datepicker" ).datepicker();
  } );

  $( function() {
  $( ".controlgroup" ).controlgroup()
  $( ".controlgroup-vertical" ).controlgroup({
    "direction": "vertical"
  });
} );

$( function() {
   $( document ).tooltip();
 } );

$( function() {
     $( "#menu" ).menu();
   } );

$( function() {
   $( ".widget input[type=submit], .widget a, .widget button" ).button();
   $( "button, input, a" ).click( function( event ) {
     event.preventDefault();
   } );
 } );
