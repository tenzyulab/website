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