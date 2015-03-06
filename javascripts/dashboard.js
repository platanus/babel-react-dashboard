"use strict";

var apiKey = "AIzaSyAqHIdFnDLnjeWa1CRBCmq879oel4KsC6w";

var url = "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=" + apiKey + "&part=snippet,contentDetails,statistics,status";

var Dashboard = React.createClass({
  displayName: "Dashboard",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        "Visit count"
      ),
      React.createElement(
        "p",
        null,
        this.props.visits
      )
    );
  }
});

Helpers.ajaxGet(url, function (data) {
  React.render(React.createElement(Dashboard, { visits: data.items[0].statistics.viewCount }), document.getElementById("example"));
});