
  var model = {
      "catz" : [
          {
              "name" : "Bags",
              "pic" : "img/bags.jpg",
              "count" : 0
          },
          {
              "name" : "Barron",
              "pic" : "img/barron.jpg",
              "count" : 0
          },
          {
              "name" : "Bird",
              "pic" : "img/parker.jpg",
              "count" : 0
          },
          {
              "name" : "Dexter",
              "pic" : "img/dexter.jpg",
              "count" : 0
          },
          {
              "name" : "Stanley",
              "pic" : "img/stanley.jpg",
              "count" : 0
          }
      ],

      "displayAdmin" : false,
      "it" : 0,

      returnAllCatz: function(){
        return(model.catz);
      },

      addCount: function(num) {
        model.catz[num].count++;
      }
  };

  var octopus = {
    getCatz: function() {
      return model.returnAllCatz();
    },

    init: function() {
      view.init();
    },

    addCount: function(num) {
      model.addCount(num);
    },

    displayAdmin: function() {
      model.displayAdmin = true;
      view.renderAdmin();
    },

    hideAdmin: function() {
      model.displayAdmin = false;
      view.renderAdmin();
    },

    getAdmin: function() {
      return model.displayAdmin;
    },

    setIt: function(num) {
      model.it = num;
    },

    getIt: function() {
      return model.it;
    },

    updateCatz: function(a,b,c) {
      model.catz[model.it].name = a;
      model.catz[model.it].pic = b;
      model.catz[model.it].count = c;
      view.render(model.it);
    }

  };

  var view = {
    init: function(){
      // get a copy of the model
      var c = octopus.getCatz();
      // create ul elements in and appeend to left hand area
      for (names in c){
        var x = document.createElement("LI");
        var t = document.createTextNode(c[names].name);
        x.appendChild(t);
        document.getElementById("myList").appendChild(x);

        // set event listeners for each ul element
        // for each click update the counter and render
        x.addEventListener('click',(function(nameCopy){
          return function(){
            octopus.addCount(nameCopy);
            view.render(nameCopy);
            octopus.setIt(nameCopy);
          };
        })(names));
        view.render(model.it);
      };

      // set listener for admin button
  var w = document.getElementById("adminButton");
  w.addEventListener('click', octopus.displayAdmin);
      // set lintener for cancel button
  var v = document.getElementById("cancelButton");
  v.addEventListener('click', octopus.hideAdmin);

  var v = document.getElementById("saveButton");
  v.addEventListener('click', (function(){
    return function(){
        var a = document.getElementById("nameForm").value;
        var b = document.getElementById("urlForm").value;
        var c = document.getElementById("clicksForm").value;
        octopus.updateCatz(a,b,c);
      };
    })());
  },

  render: function(num){
      var d = octopus.getCatz();
      var src = d[num].pic;
      $('.name').text(d[num].name);
      $('.counter').text(d[num].count);
      $('.col-10 img').attr('src', d[num].pic);
    },

  renderAdmin: function() {
      if (octopus.getAdmin()){
        $('.forms').css('display', 'inherit');
      } else {
        $('.forms').css('display', 'none');
      }
    },

  getForms: function() {
    $(".nameForm").submit(function( event ) {
      alert( "Handler for .submit() called." );
      event.preventDefault();
    });
  }
};

octopus.init();
