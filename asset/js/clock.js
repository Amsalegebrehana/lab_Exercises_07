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
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    //360 deg / 60 sec

    //30 deg= 360fdrg/12 hrs
    var hdeg = h * (360/12) + (30/60) * m; //increase slightly every degree
    var mdeg = m *  (360/60) + (6/60) * s; //increase slightly every second
    var sdeg = s * (360/60); // every sec times by six inorder to get the angle

    clockElements[0].style.transform = "rotate(" + hdeg + "deg)";
    clockElements[1].style.transform = "rotate(" + mdeg + "deg)";
    clockElements[2].style.transform = "rotate(" + sdeg + "deg)";
  }

  initClock();
  setInterval(initClock, 1000);
})(document);
