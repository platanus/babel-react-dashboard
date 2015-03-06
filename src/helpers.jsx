class Helpers {
  static ajaxGet(url, success, failure = null) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        let data = JSON.parse(request.responseText);
        success(data);
      } else {
        // We reached our target server, but it returned an error
        if (failure) {
          failure();
        }
      }
    };

    request.onerror = function() {
      // There was an error of some sort
      if (failure) {
        failure();
      }
    };

    request.send();

  }
}

export default Helpers;
