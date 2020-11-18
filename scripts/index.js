const darkBtn = document.querySelector("#btn-dark-toggle");
const bodyEl = document.querySelector("body");

const darkMode = () => {
  darkBtn.toggleAttribute("checked");
  bodyEl.classList.toggle("dark-theme");
};

/**
 * * Get value of "dark" from localStorage
 * * Check value of dark mode on localStorage after reload
 */

let setDarkMode = localStorage.getItem("dark");

if (setDarkMode == "on") {
  darkMode();
}

darkBtn.addEventListener("click", () => {
  /**
   * * Get value of "dark" from localStorage on evey click
   */
  setDarkMode = localStorage.getItem("dark");

  if (setDarkMode !== "on") {
    darkMode();
    setDarkMode = localStorage.setItem("dark", "on");
  } else {
    darkMode();
    setDarkMode = localStorage.setItem("dark", null);
  }
});

/**
 * * Toggle dropdown show and hide
 */

toggleDropdown = (id) => {
  const dropdown = document.querySelector("#" + id);

  if (dropdown.classList.contains("closed")) {
    dropdown.classList.remove("closed");
  } else {
    dropdown.classList.add("closed");
  }
};

/**
 * * Back to top button script
 */

const topBtn = document.querySelector("#topButton");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
