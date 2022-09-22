var menuButton = document.querySelector("button");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	var menu = document.querySelector("nav");
	menu.classList.toggle("open");
}