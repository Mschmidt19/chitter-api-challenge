describe("Peeps", function() {

  describe("all", function() {
    xit("Retrieves json data from a target delegates adding of data to Displayer class", function() {
      var peeps = new Peeps();
      spyOn(peeps.displayer, "addDataToContainer").and.callFake(function(array) {return array;});
      peeps.all('https://chitter-backend-api.herokuapp.com/peeps');
      expect(peeps.displayer.addDataToContainer).toHaveBeenCalled();
    })
  })
})
