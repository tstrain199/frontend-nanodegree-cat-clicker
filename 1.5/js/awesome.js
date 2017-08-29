// Javascript file for awsome cat clicker

var clicks = 0;

$('#bgimg').click(function() {
  //the element has been clicked... do stuff here
  clicks += 1;
  $("#clickNum").text(clicks);
  console.log(clicks);
});
