//d is document
(function (d) {
  function makeClockElements(tags) {
    var clock = d.getElementById("clock"),
      result = [];
    for (var i = 0; (tagName = arguments[i]); i++) {
      var element = clock.appendChild(d.createElement(tagName));
      if (tagName === "p") result.push(element);
    }
    return result;
  }
  var clockElements = makeClockElements("p", "p", "p");

  function initClock() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds(); //360 deg / 60 sec

    //30 deg= 360fdrg/12 hrs
    var hourDegrees = hour * 30 + 0.5 * minute; //increase slightly every degree
    var minuteDegrees = minute * 6 + 0.1 * second; //increase slightly every second
    var secondDegrees = second * 6; // every sec times by six inorder to get the angle

    clockElements[0].style.transform = "rotate(" + hourDegrees + "deg)";
    clockElements[1].style.transform = "rotate(" + minuteDegrees + "deg)";
    clockElements[2].style.transform = "rotate(" + secondDegrees + "deg)";
  }

  initClock();
  setInterval(initClock, 1000);
})(document);
