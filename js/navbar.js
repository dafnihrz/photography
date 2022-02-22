directoryDepth = ".".repeat(window.location.href.replace(/[^/A]/g, "").length - 2)

var menuStr =
   `<a href="gallery">Portfolio</a>
    <a href="bio">Bio</a>`;

var menuList = document.getElementById("menuBar");
menuList.innerHTML = menuStr;