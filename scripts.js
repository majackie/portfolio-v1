function openMenu() {
  const home = document.getElementById("navContainer");
  if (home.className === "nav") {
    home.className = "nav vertical";
  } else {
    home.className = "nav";
  }
}

function closeMenu() {
  const home = document.getElementById("navContainer");
  home.className = "nav";
}