function main() {
  var hi = document.createElement("h1");
  hi.appendChild(document.createTextNode("hi :)"));

  var root = document.querySelector("#root");
  root.appendChild(hi);
}

document.addEventListener("DOMContentLoaded", main);