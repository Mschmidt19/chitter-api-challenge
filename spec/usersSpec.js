describe("Users", function() {

  describe("newUser", function() {
    it("Throws an error if passwords do not match", function() {
      var users = new Users();
      expect( function(){ users.newUser('Marek', 'password', 'notpassword'); } ).toThrowError("Passwords do not match")
    })
  })
})
