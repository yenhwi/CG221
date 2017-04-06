$(document).ready(function(){
  alert("You made it")
  //alert ("you made it!")
});

$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       });
   });
   $('div').click(function() {
       $(this).toggle(1000);
   });
});

$(document).click(function(){
  $('img').animate ({
    right: '250px'
  });
});
