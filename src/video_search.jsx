import React from 'react';

let VideoSearch = React.createClass({
  render() {
    return (
      <div>
        <input type="text" onChange={this.searchVideo} placeholder="Ingresa un video" />
      </div>
    );
  },

  searchVideo(evt) {
    let video = evt.target.value;
    this.props.onChange(video);
  }
});

export default VideoSearch;
