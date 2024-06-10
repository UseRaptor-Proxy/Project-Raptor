var announcement = true;

if (announcement) {
  var announcementElement = document.getElementById("announcement");

  var h1 = document.createElement("h1");
  h1.innerHTML = "Announcement: Welcome";
  announcementElement.appendChild(h1);
} else {
  var navbar = document.getElementsByClassName("fixed-nav-bar");
  if (navbar.length > 0) {
    navbar = document.getElementsByClassName("fixed-nav-bar")[0];
    navbar.style = "top: 0  margin-bottom: 2vh ";
  } else {
    print("No navbar!");
  }
}
