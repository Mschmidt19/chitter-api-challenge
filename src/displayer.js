(function(exports) {
  'use strict'

  function Displayer(peepClass = Peeps) {
    this.peeps = new peepClass();
  }

  Displayer.prototype.peepContainer = function() {
    return document.getElementById('peepContainer');
  }

  Displayer.prototype.listPeeps = function(array) {
    let output = ''
    array.forEach(function(peep) {
      output +=`<div id='${peep["id"]}' class='peepBox'><p class='peepUser'>${peep["user"]["handle"]}</p><p class='peepTimeCreated'>${peep["created_at"]}</p><p class='peepBody'>${peep["body"]}</p><p class='peepLikes'>${peep["likes"].length} likes</p></div>`;
    })
    this.peepContainer().innerHTML = output
  };

  var displayer = new Displayer();

  displayer.peeps.all().then(response => { displayer.listPeeps(response) });

  exports.Displayer = Displayer;
})(this);
