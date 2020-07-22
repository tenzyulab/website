function doCopyDiscordId() {
  var ta = document.createElement("textarea");
  ta.value = "..........#9999";
  var bodyElm = document.getElementsByTagName("body")[0];
  bodyElm.appendChild(ta);
  ta.select();
  ta.setSelectionRange(0, 99999);
  var result = document.execCommand("copy");
  bodyElm.removeChild(ta);
  if (result) {
    var area = document.getElementById("clip-discord");
    area.innerText = "Copied!";
    setTimeout(reset, 2500)
  }

  function reset() {
    area.innerText = "Click to copy my ID."
  }
}

var touch = 'ontouchstart' in document.documentElement ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;

if (touch) {
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}