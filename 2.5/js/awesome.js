// Javascript file for awsome cat clicker

var clicks1 = 0;
var clicks2 = 0;
var name1 = "Poplin";
var name2 = "Chewie";

$( ".cat1" ).prepend( name1 );
$( ".cat2" ).prepend( name2 );
$('#bgimg1').click(function() {
  //the element has been clicked... do stuff here
  clicks1 += 1;
  $("#clickNum1").text(clicks1);
  console.log(clicks1);
});
$('#bgimg2').click(function() {
  //the element has been clicked... do stuff here
  clicks2 += 1;
  $("#clickNum2").text(clicks2);
  console.log(clicks2);
});
