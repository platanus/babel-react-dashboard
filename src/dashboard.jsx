const apiKey = 'AIzaSyAqHIdFnDLnjeWa1CRBCmq879oel4KsC6w';

let VideoSearch = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" onChange={this.searchVideo} placeholder="Ingresa un video" />
      </div>
    );
  },

  searchVideo: function(evt) {
    let video = evt.target.value;
    this.props.onChange(video);
  }
});

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
        <div>Ocurrió un error!</div>
      );
    }
  }

});

React.render(<Dashboard />, document.getElementById('application'));
