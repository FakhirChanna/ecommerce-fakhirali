const dropdownButton = document.getElementById("dropdown-button"),
  buttonBoundingClientRect = dropdownButton.getBoundingClientRect(),
  chevron = document.getElementById("chevron"),
  chevronBoudingClientRect = chevron.getBoundingClientRect(),
  rightMenu = buttonBoundingClientRect.right - chevronBoudingClientRect.right,
  topMenu = chevronBoudingClientRect.top - buttonBoundingClientRect.top,
  mainMenu = document.getElementById("main-menu");
(mainMenu.style.top = `${topMenu}px`),
  (mainMenu.style.right = `${rightMenu}px`);
const toggleDropdownMenu = () => {
  let n = document.getElementById("dropdown-menu");
  n.classList.contains("open")
    ? ((mainMenu.style.top = `${topMenu}px`),
      (mainMenu.style.right = `${rightMenu}px`))
    : ((mainMenu.style.top = `${dropdownButton.clientHeight + 10}px`),
      (mainMenu.style.right = 0)),
    n.classList.toggle("open");
};
