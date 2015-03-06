"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var VideoSearch = React.createClass({
  displayName: "VideoSearch",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement("input", { type: "text", onChange: this.searchVideo, placeholder: "Ingresa un video" })
    );
  },

  searchVideo: function searchVideo(evt) {
    var video = evt.target.value;
    this.props.onChange(video);
  }
});

module.exports = VideoSearch;