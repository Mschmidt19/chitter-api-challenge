describe("Displayer", function() {

  describe("addDataToContainer", function() {
    it("Adds data from the passed array to the div with ID 'peepContainer'", function() {
      var displayer = new Displayer();
      peepContainer = {innerHTML: ""}
      spyOn(displayer, "peepContainer").and.returnValue(peepContainer);
      mockList = [{"id":1,"body":"My first peep :)","created_at":"2018-07-29T18:37:32.607Z","updated_at":"2018-07-29T18:39:32.607Z","user":{"id":1,"handle":"Marek"},"likes":[]}]
      displayer.addDataToContainer(mockList);
      expect(peepContainer.innerHTML).toEqual(`<div id='1' class='peepBox'><p class='peepUser'>Marek</p><p class='peepTimeCreated'>2018-07-29T18:37:32.607Z</p><p class='peepBody'>My first peep :)</p><p class='peepLikes'>0 likes</p></div>`)
    })
  })
})
