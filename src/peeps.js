(function(exports) {
  'use strict'

  function Peeps() {

  }

  // Peeps.prototype.all = function() {
  //   fetch('sample.txt')
  //   .then(function(response) {
  //     return response.text();
  //   })
  //   .then(function(data) {
  //     console.log(data);
  //   })
  // };

  Peeps.prototype.peepContainer = function() {
    return document.getElementById('peepContainer');
  }

  Peeps.prototype.all = function() {
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(function(peep) {
        output += `
        <div id='${peep["id"]}' class='peepBox'>
          <p class='peepUser'>${peep["user"]["handle"]}</p>
          <p class='peepTimeCreated'>${peep["created_at"]}</p>
          <p class='peepBody'>${peep["body"]}</p>
          <p class='peepLikes'>${peep["likes"].length} likes</p>
        </div>
        `;
      })
      this.peepContainer().innerHTML = output
    })
    .catch((err) => console.log(err))
  };

  var peeps = new Peeps()

  peeps.all()

  exports.Peeps = Peeps;
})(this);
