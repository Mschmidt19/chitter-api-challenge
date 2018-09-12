describe("peepList", function() {

  describe("all", function() {
    it("Retrieves all peeps from the api and adds each to the div with ID 'peepContainer'", function() {
      var peeps = new Peeps();
      peepContainer = {innerHTML: ""}
      mockList = '[{"id":1,"body":"My first peep :)","created_at":"2018-07-29T18:37:32.607Z","updated_at":"2018-07-29T18:39:32.607Z","user":{"id":1,"handle":"Marek"},"likes":[]}]'
      peeps.all(mockList);
      expect(peepContainer.innerHTML).toBe("<div id='1' class='peepBox'><p class='peepUser'>Marek</p><p class='peepTimeCreated'>2018-07-29T18:37:32.607Z</p><p class='peepBody'>My first peep :)</p><p class='peepLikes'>0 likes</p><div>")
    })
  })
})
