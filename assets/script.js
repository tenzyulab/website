function doCopy(txt) {
    var ta = document.createElement("textarea");
    document.getElementsByTagName("body")[0].appendChild(ta);
    ta.value = txt;
    ta.select();
    var ret = document.execCommand("copy");
    ta.parentNode.removeChild(ta);
    alert("Copied!");
}