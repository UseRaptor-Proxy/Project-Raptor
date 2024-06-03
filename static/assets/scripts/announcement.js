var announcement = true

if (announcement) {
  var announcement = document.getElementById("announcement")

  var h1 = document.createElement("h1")
  h1.innerHTML = "Announcement: We are working on adding more proxies"
  announcement.appendChild(h1)
} else {
  var navbar = document.getElementsByClassName("fixed-nav-bar")[0]
  navbar.style = "top: 0; margin-bottom: 2vh;"
}
