function hamburgerMenu() {
  const home = document.getElementById("home");
  if (home.className === "nav") {
    home.className = "nav vertical";
  } else {
    home.className = "nav";
  }
}