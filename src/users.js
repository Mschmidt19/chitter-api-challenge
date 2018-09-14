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

  Users.prototype.likePeep = function(peep_id) {
    fetch(`https://chitter-backend-api.herokuapp.com/peeps/${peep_id}/likes/${sessionStorage.getItem('user_id')}`, {
      method: "PUT",
      headers: {
        Authorization: `Token token=${sessionStorage.getItem('session_key')}`
      }
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then(
      window.setTimeout(function() {
        location.reload();
      }, 2000)
    )
  };

  Users.prototype.haveLikedPeep = function(peep_id) {
    return fetch(`https://chitter-backend-api.herokuapp.com/peeps/${peep_id}`)
    .then((response) => response.json())
    .then((data) => {
      var trueOrFalse = false
      data["likes"].forEach(function(entry) {
        if(entry["user"]["id"] == sessionStorage.getItem('user_id')) {
          trueOrFalse = true
        }
      })
      return trueOrFalse;
      // if(trueOrFalse) {
      //   console.log('true')
      // }
      // else {
      //   console.log('false')
      // }
    })
  }

  Users.prototype.showLikeOrUnlikeButton = async function(peep_id) {
    var result = await this.haveLikedPeep(peep_id)
    if(result) {
      return `<button id='${peep_id}' onclick='users.unlikePeep(this.id)'>Unlike</button>`
    }
    else {
      return `<button id='${peep_id}' onclick='users.likePeep(this.id)'>Like</button>`
    }
  }

  Users.prototype.check = function(peep_id) {
    console.log(this.haveLikedPeep(peep_id))
  }

  exports.Users = Users;
})(this);

var users = new Users
