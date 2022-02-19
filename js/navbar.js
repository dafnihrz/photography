directoryDepth = ".".repeat(window.location.href.replace(/[^/A]/g, "").length - 2)

var menuStr =
   `<a href="">HOME</a>
    <a href="work">WORK</a>
    <a href="bio">BIO</a>`;

var menuList = document.getElementById("menuBar");
menuList.innerHTML = menuStr;