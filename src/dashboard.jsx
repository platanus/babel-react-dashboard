import React from 'react';
import VideoSearch from './video_search';
import YouTubeVideo from './youtube_video';

let Dashboard = React.createClass({

  getInitialState() {
    return { views: 0, likes: 0, dislikes: 0, comments: 0, error: false };
  },

  render() {
    return (
      <div>
        <VideoSearch onChange={ this.refresh } />
        { this.renderError() }
        <div class="stats">
          <h2>Visits</h2>
          <p>{ this.state.views }</p>
        </div>
        <div class="stats">
          <h2>Likes</h2>
          <p>{ this.state.likes }</p>
        </div>
        <div class="stats">
          <h2>Dislikes</h2>
          <p>{ this.state.dislikes }</p>
        </div>
        <div class="stats">
          <h2>Comments</h2>
          <p>{ this.state.comments }</p>
        </div>
      </div>
    );
  },

  refresh(video) {
    if (!video) {
      this.setError();
      return;
    }

    let youtube = new YouTubeVideo(video);
    youtube.getStats((stats) => {
      this.setState({
        views: stats.viewCount,
        likes: stats.likeCount,
        dislikes: stats.dislikeCount,
        comments: stats.commentCount,
        error: false
      });
    }, () => {
      this.setError();
    });
  },

  renderError() {
    if (this.state.error) {
      return (
        <div>{ "This video doesn't exist!" }</div>
      );
    }
  },

  setError() {
    this.setState({ visits: 0, error: true });
  }

});

React.render(<Dashboard />, document.getElementById('application'));
