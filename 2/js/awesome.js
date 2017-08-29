// Javascript file for awsome cat clicker
// clear the screen for testing
// document.body.innerHTML = '';
document.body.style.background="white";

var cats = ["parker","dexter","barron","stanley","bags"];

// Let's loop over the numbers in our array
for (var i = 0; i < cats.length; i++) {

    // This is the number we're on...
    var num = cats[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = cats[i];

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', function() {
        elem.src = '"images/" + cats[i]"';
        var list = document.getElementById("showArea");
        list.removeChild(list.childNodes[0]);
        document.getElementById("showArea").appendChild(elem);

    });

    // finally, let's add this element to the document
    document.getElementById("topArea").appendChild(elem);
};
