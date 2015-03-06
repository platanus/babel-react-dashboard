"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Helpers = _interopRequire(require("./helpers"));

var VideoSearch = _interopRequire(require("./video_search"));

var apiKey = "AIzaSyAqHIdFnDLnjeWa1CRBCmq879oel4KsC6w";

var Dashboard = React.createClass({
  displayName: "Dashboard",

  getInitialState: function getInitialState() {
    return { visits: 0, error: false };
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(VideoSearch, { onChange: this.refresh }),
      React.createElement(
        "h2",
        null,
        "Visit count"
      ),
      this.renderError(),
      React.createElement(
        "p",
        null,
        this.state.visits
      )
    );
  },

  refresh: function refresh(video) {
    var _this = this;

    var url = "https://www.googleapis.com/youtube/v3/videos?id=" + video + "&key=" + apiKey + "&part=snippet,contentDetails,statistics,status";
    Helpers.ajaxGet(url, function (data) {
      if (data.items[0]) {
        _this.setState({ visits: data.items[0].statistics.viewCount, error: false });
      } else {
        _this.setState({ visits: 0, error: true });
      }
    });
  },

  renderError: function renderError() {
    if (this.state.error) {
      return React.createElement(
        "div",
        null,
        "This video doesn't exist!"
      );
    }
  }

});

React.render(React.createElement(Dashboard, null), document.getElementById("application"));