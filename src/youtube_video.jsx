import Helpers from './helpers';

const apiKey = 'AIzaSyAqHIdFnDLnjeWa1CRBCmq879oel4KsC6w';

class YouTubeVideo {

  constructor(video) {
    this.url = `https://www.googleapis.com/youtube/v3/videos?id=${video}&key=${apiKey}&part=snippet,contentDetails,statistics,status`;
  }

  getStats(success, error) {
    Helpers.ajaxGet(this.url, (data) => {
      let item = data.items[0];
      if (item) {
        success(item.statistics);
      } else {
        error()
      }
    });
  }
}

export default YouTubeVideo;
