"use strict";

var apiKey = "AIzaSyAqHIdFnDLnjeWa1CRBCmq879oel4KsC6w";

var url = "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=" + apiKey + "&part=snippet,contentDetails,statistics,status";

Helpers.ajaxGet(url, function (data) {
  console.log(data);
  React.render(React.createElement(
    "h1",
    null,
    "It works!"
  ), document.getElementById("example"));
});