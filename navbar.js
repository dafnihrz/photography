directoryDepth = ".".repeat(window.location.href.replace(/[^/A]/g, "").length - 2)

var menuStr =
   `<a href="index.html">HOME</a>
    <a href="work.html">WORK</a>
    <a href="bio.html">BIO</a>`;

var menuList = document.getElementById("menuBar");
menuList.innerHTML = menuStr;