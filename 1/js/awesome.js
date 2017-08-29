// Javascript file for awsome cat clicker
/*
var clicks = 0;

$('.bgimg').click(function() {
  //the element has been clicked... do stuff here
  clicks += 1;
  $("#clickNum").text(clicks);
  console.log(clicks);
});
*/

var Animal = function(name, image, clicks) {
  this.name = name;
  this.image = image;
  this.clicks = clicks;
};

Animal.prototype.addClick = function() {
  console.log(this.clicks + " " + this.name);
  $("#"+this.name).click(function() {
  //  console.log(this.clicks + " " + this.name);
    this.clicks += 1;
    $("."+this.name).text(this.clicks);
    console.log(this.clicks);
  });
};

Animal.prototype.buildDev = function() {
  var divOpenString = "<div style='background-image: url(" + this.image + "' class='animal' id='" + this.name + "'><h2>This is " + this.name + "</h2>";
  var clickString = "<h1 id='" + this.name + "'>0</h1>";
  var divCloseString = "</div>";
  $('body').prepend(divOpenString + clickString + divCloseString);
};

var img1 = 'https://upload.wikimedia.org/wikipedia/en/d/d7/Walking_with_Dinosaurs_Gorgosaurus.jpg';
var img2 = 'http://d.ibtimes.co.uk/en/full/1372046/sordes.jpg';
var cat1 = new Animal('mittens', img1, 0);
var cat2 = new Animal('fluffy', img2, 0);

cat1.buildDev();
cat1.addClick();
cat2.buildDev();
cat2.addClick();
