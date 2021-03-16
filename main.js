var about = document.getElementById("about_d")
var contacts = document.getElementById("contacts_d")
var projs = document.getElementById("projs_d")
var ba = document.getElementById("ba")
var bc = document.getElementById("bc")
var bp = document.getElementById("bp")

page()

function page(){
if (window.location.hash == "#about") {
  ba.setAttribute("style", "background-color: rgb(24, 52, 53);");
  bc.setAttribute("style", "background-color: rgb(36, 77, 78);");
  bp.setAttribute("style", "background-color: rgb(36, 77, 78);");
  about.style.display = "block";
  contacts.style.display = "none";
  projs.style.display = "none";
}

else if (window.location.hash == "#contacts") {
  bc.setAttribute("style", "background-color: rgb(24, 52, 53);");
  ba.setAttribute("style", "background-color: rgb(36, 77, 78);");
  bp.setAttribute("style", "background-color: rgb(36, 77, 78);");
  about.style.display = "none";
  contacts.style.display = "block";
  projs.style.display = "none";
}
else if (window.location.hash == "#projs") {
  bp.setAttribute("style", "background-color: rgb(24, 52, 53);");
  bc.setAttribute("style", "background-color: rgb(36, 77, 78);");
  ba.setAttribute("style", "background-color: rgb(36, 77, 78);");
  about.style.display = "none";
  contacts.style.display = "none";
  projs.style.display = "block";
}
else{location.hash = "about"}
}
