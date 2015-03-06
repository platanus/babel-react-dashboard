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
    return { visits: 0 };
  },

  render: function() {
    return (
      <div>
        <VideoSearch onChange={ this.refresh } />
        <h2>Visit count</h2>
        <p>{ this.state.visits }</p>
      </div>
    );
  },

  refresh: function(video) {
    let url = `https://www.googleapis.com/youtube/v3/videos?id=${video}&key=${apiKey}&part=snippet,contentDetails,statistics,status`
    Helpers.ajaxGet(url, (data) => {
      this.setState({ visits: data.items[0].statistics.viewCount });
    });
  }
});

React.render(<Dashboard />, document.getElementById('application'));
