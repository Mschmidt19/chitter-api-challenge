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

  Peeps.prototype.newPeep = function(body) {
    fetch('https://chitter-backend-api.herokuapp.com/peeps', {
      method: 'POST',
      headers: {
        Authorization: `Token token=${sessionStorage.getItem('session_key')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        peep: {
          user_id: sessionStorage.getItem('user_id'),
          body: body
        }
      })
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .then(
      window.setTimeout(function() {
        location.reload();
      }, 2000)
    )
  };



  exports.Peeps = Peeps;
})(this);

var peeps = new Peeps;
peeps.all('https://chitter-backend-api.herokuapp.com/peeps')
