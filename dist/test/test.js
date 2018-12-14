(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var footView = { render: function () { } };
exports.footView = footView;

},{}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var headerView = { render: function () {
        if (3 < 4)
            console.log('aaaaaaaaaaaaaaaa for test ....');
    } };
exports.headerView = headerView;

},{}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var header_view_1 = require("./header_view");
var foot_view_1 = require("./foot_view");
header_view_1.headerView.render();
foot_view_1.footView.render();
function add(a, b) {
    return a + b;
}

},{"./foot_view":1,"./header_view":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0ZW1wL3Rlc3QvZm9vdF92aWV3LmpzIiwidGVtcC90ZXN0L2hlYWRlcl92aWV3LmpzIiwidGVtcC90ZXN0L21haW4udGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBmb290VmlldyA9IHsgcmVuZGVyOiBmdW5jdGlvbiAoKSB7IH0gfTtcbmV4cG9ydHMuZm9vdFZpZXcgPSBmb290VmlldztcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBoZWFkZXJWaWV3ID0geyByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKDMgPCA0KVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FhYWFhYWFhYWFhYWFhYWEgZm9yIHRlc3QgLi4uLicpO1xuICAgIH0gfTtcbmV4cG9ydHMuaGVhZGVyVmlldyA9IGhlYWRlclZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgaGVhZGVyX3ZpZXdfMSA9IHJlcXVpcmUoXCIuL2hlYWRlcl92aWV3XCIpO1xudmFyIGZvb3Rfdmlld18xID0gcmVxdWlyZShcIi4vZm9vdF92aWV3XCIpO1xuaGVhZGVyX3ZpZXdfMS5oZWFkZXJWaWV3LnJlbmRlcigpO1xuZm9vdF92aWV3XzEuZm9vdFZpZXcucmVuZGVyKCk7XG5mdW5jdGlvbiBhZGQoYSwgYikge1xuICAgIHJldHVybiBhICsgYjtcbn1cbiJdfQ==
