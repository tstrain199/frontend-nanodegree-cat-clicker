// Javascript file for awsome cat clicker
// clear the screen for testing
// document.body.innerHTML = '';
// document.body.style.background="white";

var nums = [1,2,3,4,5];
var clicks = [0,0,0,0,0];
var cats = ["Bags", "Barron", "Dexter", "Parker", "Stanley"];
var pics = ["img/bags.jpg", "img/barron.jpg", "img/dexter.jpg", "img/parker.jpg", "img/stanley.jpg"];

$(".col-10").append('<image src="' + pics[0] +'">');

for (i = 0; i < cats.length; i++) {
  var cat = cats[i];
  var pic = pics[i];
  var click = clicks[i];
  //var elem = $(".list").append('<li>' + cat + '</li>');
  var x = document.createElement("LI");
  var t = document.createTextNode(cat);
  x.appendChild(t);
  document.getElementById("myList").appendChild(x);

  //elem.on('click',(function(j){
  x.addEventListener('click', (function(picCopy, clickCopy) {
     return function() {
       var src = $(this).attr('src');
       $('.col-10 img').attr('src', picCopy);
       clickCopy +=1;
       $('.counter').text(clickCopy);
       console.log(clickCopy);
     };
  })(pic, click));
};
