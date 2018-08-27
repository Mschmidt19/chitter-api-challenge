function reqListener () {
  list = this.responseText;
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://chitter-backend-api.herokuapp.com/peeps");
oReq.send();

var peepList = new PeepList();
var peepContainer = document.getElementById('peepContainer')
