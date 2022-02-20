directoryDepth = ".".repeat(window.location.href.replace(/[^/A]/g, "").length - 2)

var menuStr =
   `<a href="gallery">HOME</a>
    <a href="bio">BIO</a>`;

var menuList = document.getElementById("menuBar");
menuList.innerHTML = menuStr;