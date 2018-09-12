(function(exports) {
  'use strict'

  function Peeps(displayerClass = Displayer) {
    this.displayer = new displayerClass();
  }

  // Peeps.prototype.sample = function() {
  //   return fetch('sample.txt')
  //   .then(function(response) {
  //     return response.text();
  //   })
  //   .then(function(data) {
  //     return data;
  //   })
  // };

  Peeps.prototype.all = function(fetchTarget) {
    return fetch(fetchTarget)
    .then(response => response.json())
    .then(data => {
      this.displayer.addDataToContainer(data);
    })
    .catch((err) => console.log(err))
  };

  var peeps = new Peeps;
  peeps.all('https://chitter-backend-api.herokuapp.com/peeps')

  exports.Peeps = Peeps;
})(this);
