import React from 'react';
import parseURL from 'url-parse';

let VideoSearch = React.createClass({
  render() {
    return (
      <div>
        <input type="text" onChange={this.searchVideo} placeholder="Ingresa un video" />
      </div>
    );
  },

  searchVideo(evt) {
    let url = evt.target.value;
    let video = parseURL(url, true).query.v;
    this.props.onChange(video);
  }
});

export default VideoSearch;
