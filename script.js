// Get the nav by id
var pNav = document.getElementById("Nav");

function toggleSubNav(eID) {
  try {
    // Get all the top-level items and get the buttons
    var allButtons = document.querySelectorAll("#Nav > ul > li > a + button");
    // Get all sub-menus
    var allSubMenus = document.querySelectorAll("#Nav > ul > li > a + button + ul");
    if (eID !== "") {
      // Get the button
      var toggle = document.querySelector("#" + eID);
      // Find out what the button controls
      var subMenuIdent = toggle.getAttribute("aria-controls");
      // Get that thing it controls
      var subMenu = document.getElementById(subMenuIdent);
      // Toggle text and expanded state
      if (toggle.getAttribute("aria-expanded") === "false") {
        // Loop through all buttons and mark as closed
        for (var i = 0; i < allButtons.length; i++) {
          allButtons[i].setAttribute("aria-expanded", "false");
          // allButtons[i].setAttribute("aria-label", "Show");
        //   allButtons[i].innerHTML = arrowShow;
        }
        // Now mark the chosen button as opened
        toggle.setAttribute("aria-expanded", "true");
        // toggle.setAttribute("aria-label", "Hide");
      } else {
        // Close chosen button; no need to loop through rest of nodes
        toggle.setAttribute("aria-expanded", "false");
        // toggle.setAttribute("aria-label", "Show");
      }
      // Expand or collapse
      if (subMenu.style.display === "none") {
        // Hide all submenus
        for (var i = 0; i < allSubMenus.length; i++) {
          allSubMenus[i].style.display = "none";
        }
        // Show chosen submenu
        subMenu.style.display = "block";
      } else {
        // Close chosen menu; no need to loop through rest of nodes
        subMenu.style.display = "none";
      }
    }
    if (eID !== "") {
    } else {
      // Hide all submenus
      for (var i = 0; i < allSubMenus.length; i++) {
        allSubMenus[i].style.display = "none";
      }
      // Loop through all buttons and mark as closed
      for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].setAttribute("aria-expanded", "false");
        // allButtons[i].setAttribute("aria-label", "Show");
        // allButtons[i].innerHTML = arrowShow;
      }
    }
  } catch (e) {
    console.log("toggleSubNav(): " + e);
  }
}

document.onkeydown = function(evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key == "Escape" || evt.key == "Esc";
  } else {
    isEscape = evt.keyCode == 27;
  }
  if (isEscape) {
    //alert("Escape");
    toggleSubNav("");
  }
};

