import React from 'react';
import Helpers from './helpers';
import VideoSearch from './video_search';

const apiKey = 'AIzaSyAqHIdFnDLnjeWa1CRBCmq879oel4KsC6w';

let Dashboard = React.createClass({

  getInitialState: function() {
    return { visits: 0, error: false };
  },

  render: function() {
    return (
      <div>
        <VideoSearch onChange={ this.refresh } />
        <h2>Visit count</h2>
        { this.renderError() }
        <p>{ this.state.visits }</p>
      </div>
    );
  },

  refresh: function(video) {
    let url = `https://www.googleapis.com/youtube/v3/videos?id=${video}&key=${apiKey}&part=snippet,contentDetails,statistics,status`
    Helpers.ajaxGet(url, (data) => {
      if (data.items[0]) {
        this.setState({ visits: data.items[0].statistics.viewCount, error: false });
      } else {
        this.setState({ visits: 0, error: true });
      }
    });
  },

  renderError: function() {
    if (this.state.error) {
      return (
        <div>{ "This video doesn't exist!" }</div>
      );
    }
  }

});

React.render(<Dashboard />, document.getElementById('application'));
