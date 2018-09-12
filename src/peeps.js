(function(exports) {
  'use strict'

  function Peeps() {

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

  Peeps.prototype.all = function() {
    return fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch((err) => console.log(err))
  };

  exports.Peeps = Peeps;
})(this);
