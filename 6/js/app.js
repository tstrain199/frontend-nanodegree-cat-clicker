
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
          };
        })(names));
      };

      // set listener for admin button
  var w = document.getElementById("adminButton");
    w.addEventListener('click', octopus.displayAdmin);
      // set lintener for cancel button
  var v = document.getElementById("cancelButton");
    v.addEventListener('click', octopus.hideAdmin);
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
    }
  };

  octopus.init();
  //view.hideAdmin();
