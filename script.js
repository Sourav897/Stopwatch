var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start() {
  timer = true;
  stopwatch();
}

function stop() {
  timer = false;
}

/**
 * The reset function sets the timer to false, sets the hours, minutes, seconds, and count to 0, and
 * then updates the HTML elements to reflect the changes.
 */
function reset() {
  timer = false;

  hr = 0;
  min = 0;
  sec = 0;
  count = 0;

  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function stopwatch() {
  if (timer == true) {
    count = count + 1;

    /* This is the code that adds one to the seconds, minutes, and hours. */
    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    /* Adding a zero to the beginning of the hours, minutes, seconds, and count if they are less than 10. */
    if (hr < 10) {
      hrString = "0" + hrString;
    }

    if (min < 10) {
      minString = "0" + minString;
    }

    if (sec < 10) {
      secString = "0" + secString;
    }

    if (count < 10) {
      countString = "0" + countString;
    }

    /* Updating the HTML elements with the new values of the hours, minutes, seconds, and count. */
    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;

    /* Calling the stopwatch function every 10 milliseconds. */
    setTimeout("stopwatch()", 10);
  }
}
