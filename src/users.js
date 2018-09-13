(function(exports) {
  'use strict'

  function Users() {
    this.user_id;
    this.session_key;
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
    .then(
      window.setTimeout(function() {
        users.logIn(handle, password)
      }, 2000)
    )
    .then(
      window.setTimeout(function() {
        window.location.href = "/peeps.html"
      }, 4000)
    )
  }
  };

  Users.prototype.logIn = function(handle, password) {
    fetch('https://chitter-backend-api.herokuapp.com/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        session: {
          handle: handle,
          password: password
        }
      })
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      sessionStorage.setItem('handle', handle)
      sessionStorage.setItem('user_id', data["user_id"]);
      sessionStorage.setItem('session_key', data["session_key"]);
    })
    .then(
      window.setTimeout(function() {
        window.location.href = "/peeps.html"
      }, 2000)
    )
  };

  exports.Users = Users;
})(this);

var users = new Users
