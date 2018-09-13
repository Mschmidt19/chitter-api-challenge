(function(exports) {
  'use strict'

  function Users() {

  }

  Users.prototype.newUser = function(handle, password, confirmPassword) {
    if(password != confirmPassword) {
      throw new Error("Passwords do not match");
    }
    else {
    fetch('https://chitter-backend-api.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          handle: handle,
          password: password
        }
      })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
  }
  };

  exports.Users = Users;
})(this);

var users = new Users;
