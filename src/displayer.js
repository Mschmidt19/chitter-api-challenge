(function(exports) {
  'use strict'

  function Displayer() {

  }

  Displayer.prototype.peepContainer = function() {
    return document.getElementById('peepContainer');
  }

  Displayer.prototype.addDataToContainer = function(array) {
    let output = ''
    array.forEach(function(peep) {
      output +=`<div class='peepBox'><p class='peepUser'>${peep["user"]["handle"]}</p><p class='peepTimeCreated'>${peep["created_at"]}</p><p class='peepBody'>${peep["body"]}</p><p class='peepLikes'>${peep["likes"].length} likes</p><button id='${peep["id"]}' onclick='users.likePeep(this.id)'>Like</button></div>`;
    })
    this.peepContainer().innerHTML = output
  };

  // var displayer = new Displayer();
  //
  // displayer.peeps.all('https://chitter-backend-api.herokuapp.com/peeps').then(response => { displayer.listPeeps(response) });

  exports.Displayer = Displayer;
})(this);
