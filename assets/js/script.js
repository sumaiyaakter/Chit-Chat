const chaContent = document.querySelector(".chats");
const copies = document.querySelectorAll(".text .dropdown-menu a");
copies.forEach((copy) => {
  if (copy.innerText.toLowerCase() === "copy") {
    copy.addEventListener("click", (e) => {
      const parentContainer = e.target.closest(".message");
      const copiedText = parentContainer.querySelector(".text p");
      if (copiedText) {
        navigator.clipboard.writeText(copiedText.innerText);
      }

      // copied message
      const copiedArea = document.createElement("div");
      copiedArea.classList.add("copied-text");
      chaContent.appendChild(copiedArea);
      copiedArea.innerHTML = "copied";

      setTimeout(function () {
        copiedArea.innerHTML = "";
        copiedArea.classList.remove("copied-text");
      }, 1500);
    });
  }
});

/* ---------------------------------------------
                     Remove
--------------------------------------------- */
const removed = document.querySelectorAll(".text .dropdown-menu a");
removed.forEach((remove) => {
  if (remove.innerText.toLowerCase() === "remove") {
    remove.addEventListener("click", (e) => {
      const message = e.target.closest(".message");
      if (message) {
        message.remove();
      }
    });
  }
});


/* ---------------------------------------------
                     Theme switcher
--------------------------------------------- */

// ==== Create theme switcher elements for each chat header
const userChatNavs = document.querySelectorAll('.chat-header .user-chat-nav');
userChatNavs.forEach(userChatNav => {
    // Create the themeSwitchers element as a div
    const themeSwitchers = document.createElement('div');
    themeSwitchers.innerHTML = `<div class="theme-switcher d-none d-lg-block">
        <a class="nav-link m-0 palette">
          <i class="fa-solid fa-palette"></i>
        </a>
        <ul class="dropdown">
          <li theme="default">
            <a>default</a>
          </li>
          <li theme="dark">
            <a>dark</a>
          </li>
          <li theme="ocean">
            <a>ocean</a>
          </li>
          <li theme="forest">
            <a>forest</a>
          </li>
          <li theme="sunset">
            <a>sunset</a>
          </li>
          <li theme="royal-purple">
            <a>Purple</a>
          </li>
        </ul>
      </div>`;

    // Insert the themeSwitchers element directly before each chatHeader
    // userChatNav.appendChild(themeSwitchers.firstChild);
    userChatNav.insertAdjacentElement('afterbegin', themeSwitchers.firstChild);
});


// ==== Theme switcher color
var themeItems = document.querySelectorAll(".theme-switcher li");
// Function to set the theme
function setTheme(themeName) {
  // Set theme in body
  document.body.setAttribute("data-theme", themeName);

  // Update primary color variable based on theme
  var primaryColor;
  switch (themeName) {
    case "default":
      primaryColor = "#16a085";
      break;
    case "dark":
      primaryColor = "#333333";
      break;
    case "cupcake":
      primaryColor = "#ffccff";
      break;
    case "ocean":
      primaryColor = "#0077be";
      break;
    case "forest":
      primaryColor = "#228b22";
      break;
    case "sunset":
      primaryColor = "#ff4500";
      break;
    case "royal-purple":
      primaryColor = "#6A0DAD";
      break;
    case "lemon-lime":
      primaryColor = "#BFFF00";
      break;
    case "sky-blue":
      primaryColor = "#87CEEB";
      break;
    default:
      primaryColor = "#333333"; // Default primary color
  }

  // Update primary color variable using Sass variable
  document.documentElement.style.setProperty("--primary-color", primaryColor);
  document.documentElement.style.setProperty("--border-primary", primaryColor);

  // Save selected theme in local storage
  localStorage.setItem("selectedTheme", themeName);
}

// Loop through each list item and add click event listener
themeItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // Get the theme name from the clicked list item
    var themeName = item.getAttribute("theme");

    // Set the theme
    setTheme(themeName);
  });
});
// Check if there is a selected theme in local storage and set it
var savedTheme = localStorage.getItem("selectedTheme");
if (savedTheme) {
  setTheme(savedTheme);
}

/// theme-switcher menu
const themeSwitchersPalette = document.querySelectorAll('.theme-switcher .palette i');
const themeSwitcherDropDowns = document.querySelectorAll(".theme-switcher .dropdown");

// Initially hide all dropdowns
themeSwitcherDropDowns.forEach(dropdown => {
  dropdown.style.opacity = "0";
  dropdown.style.visibility = "hidden";
});

// Add click event listener to each theme switcher
themeSwitchersPalette.forEach((themeSwitcher, index) => {
  themeSwitcher.addEventListener("click", (e) => {
    // Check if the clicked dropdown is already active
    const isActive = themeSwitcherDropDowns[index].classList.contains("active");

    // Close all dropdowns first if the clicked dropdown is not active
    if (!isActive) {
      themeSwitcherDropDowns.forEach(dropdown => {
        dropdown.classList.remove("active");
        dropdown.style.opacity = "0";
        dropdown.style.visibility = "hidden";
      });
    }

    themeSwitcherDropDowns[index].classList.toggle("active");
    themeSwitcherDropDowns[index].style.opacity = isActive ? "0" : "1";
    themeSwitcherDropDowns[index].style.visibility = isActive ? "hidden" : "visible";

    // Prevent click event from propagating to the document body
    e.stopPropagation();
  });
});

// Add click event listener to document body
document.body.addEventListener("click", () => {
  // Loop through all dropdowns and hide them when clicked outside
  themeSwitcherDropDowns.forEach(dropdown => {
    dropdown.classList.remove("active");
    dropdown.style.opacity = "0";
    dropdown.style.visibility = "hidden";
  });
});

// Add click event listener to navigation items to prevent closing the dropdown
themeSwitcherDropDowns.forEach(navItem => {
  navItem.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

/* ---------------------------------------------
                     Tabs
--------------------------------------------- */
var li_elements = document.querySelectorAll(".navigation > ul > li");
var item_elements = document.querySelectorAll(".tab_pane");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function () {
    li_elements.forEach(function (li) {
      li.classList.remove("active");
    });
    this.classList.add("active");

    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function (tab_pane) {
      tab_pane.style.display = "none";
    });
    if (li_value == "profile-tab") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "chats-tab") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "groups-tab") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "contacts-tab") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "setting-tab") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "theme-tab") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "logout-tab") {
      document.querySelector("." + li_value).style.display = "block";
    }
  });
}


(function ($) {
  "use strict";

/* ---------------------------------------------
sidebar
--------------------------------------------- */
  $(".chat-item").on("click", function (e) {
    $(this).toggleClass("open");
    $(".chats").toggleClass("open");
  });

  $(".chat-item").click(function () {
    $(".chat-item").removeClass("open");
    $(this).addClass("open");
  });

  $(".user-chat-remove").on("click", function (e) {
    $(".chats").removeClass("open");
    $(".chat-body").removeClass("small-sidebar");
    $(".right-sidebar").removeClass("show");
  });

  /* ---------------------------------------------
Right sidebar
--------------------------------------------- */
  $(".chat-header .user-name, .user-icon").on("click", function (e) {
    $(".right-sidebar").addClass("show");
    $(".chat-body").addClass("small-sidebar");
  });

  $(".user-profile-hide").on("click", function () {
    $(".right-sidebar").removeClass("show");
    $(".chat-body").removeClass("small-sidebar");
  });

  /* ---------------------------------------------
Search form
--------------------------------------------- */
  $(".chat-search-form a").on("click", function () {
    $(".chat-header .search-form-1").toggleClass("show");
  });
  $(".chat-search-form a, .chat-header .search-form-1").on(
    "click",
    function (e) {
      e.stopPropagation();
    }
  );
  $("body").on("click", function () {
    $(".chat-header .search-form-1").removeClass("show");
  });

  /* ---------------------------------------------
Screen fullscreen mode
--------------------------------------------- */
  if (document.fullscreenEnabled) {
    var btn = document.getElementById("toggle");
    btn.addEventListener(
      "click",
      function (event) {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      },
      false
    );
    document.addEventListener("fullscreenerror", function (event) {
      console.log(event);
    });
  }
})(jQuery);
