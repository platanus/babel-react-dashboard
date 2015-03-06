const apiKey = 'AIzaSyAqHIdFnDLnjeWa1CRBCmq879oel4KsC6w';

let url = `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${apiKey}&part=snippet,contentDetails,statistics,status`

let Dashboard = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Visit count</h2>
        <p>{ this.props.visits }</p>
      </div>
    );
  }
});

Helpers.ajaxGet(url, function(data) {
  React.render(
    <Dashboard visits={data.items[0].statistics.viewCount} />,
    document.getElementById('example');
  );
});
