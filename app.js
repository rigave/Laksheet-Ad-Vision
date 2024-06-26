const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");
const close_tab = document.querySelector(".fa-xmark");
const open_tab = document.querySelector(".fa-bars");
const sideMenu = document.querySelector("#side-menu");

const openTab = (tabName) => {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
};

close_tab.addEventListener("click", () => {
  sideMenu.style.right = "-200px";
});

open_tab.addEventListener("click", () => {
  sideMenu.style.right = "0";
});
