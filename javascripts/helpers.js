"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Helpers = (function () {
  function Helpers() {
    _classCallCheck(this, Helpers);
  }

  _createClass(Helpers, null, {
    ajaxGet: {
      value: function ajaxGet(url, success) {
        var failure = arguments[2] === undefined ? null : arguments[2];

        var request = new XMLHttpRequest();
        request.open("GET", url, true);

        request.onload = function () {
          if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
            success(data);
          } else {
            // We reached our target server, but it returned an error
            if (failure) {
              failure();
            }
          }
        };

        request.onerror = function () {
          // There was an error of some sort
          if (failure) {
            failure();
          }
        };

        request.send();
      }
    }
  });

  return Helpers;
})();

module.exports = Helpers;