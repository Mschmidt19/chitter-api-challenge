(function(exports) {
  'use strict'

  function PeepList() {

  }

  PeepList.prototype.allPeeps = function (peeplist) {
    var peepArray = JSON.parse(peeplist);
    peepArray.forEach(function(peepElement) {
      peepContainer.innerHTML += `<div id='${peepElement["id"]}' class='peepBox'><p class='peepUser'>${peepElement["user"]["handle"]}</p><p class='peepTimeCreated'>${peepElement["created_at"]}</p><p class='peepBody'>${peepElement["body"]}</p><p class='peepLikes'>Likes: ${peepElement["likes"].length}</p><div>`
    });
  };

  exports.PeepList = PeepList;
})(this);
