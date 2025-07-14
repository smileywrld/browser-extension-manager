/*const toggleBtn = document.querySelector(".toggle-btn");
const body = document.body;

function toggleTheme() {
	body.classList.toggle("dark");
	if (body.classList.contains("dark")) {
		toggleBtn.innerHTML =
			'<img src="assets/images/icon-moon.svg" alt="Moon Icon">';
	} else {
		toggleBtn.innerHTML =
			'<img src="assets/images/icon-sun.svg" alt="Sun Icon">';
	}
}

document.addEventListener("DOMContentLoaded", toggleTheme);

toggleBtn.addEventListener("click", toggleTheme);
*/

const toggleBtn = document.querySelector(".toggle-btn");
const body = document.body;
const heading = document.querySelector(".heading");
const card = document.querySelector(".card");
const remove = document.querySelector(".remove");
const toggler = document.querySelector(".toggler");
const toggler2 = document.querySelector(".toggler-2");

function darkMode() {
	body.classList.toggle("dark");
	if (body.classList.contains("dark")) {
		toggleBtn.innerHTML =
			'<img src="assets/images/icon-moon.svg" alt="Moon Icon">';
		heading.classList.add("text-white");
		card.classList.add("card");
		remove.classList.add("remove");
		toggler.classList.add("toggler");
		toggler2.classList.add("toggler-2");
	} else {
		toggleBtn.innerHTML =
			'<img src="assets/images/icon-sun.svg" alt="Sun Icon">';
		heading.classList.remove("text-white");
		card.classList.remove("card");
		remove.classList.remove("remove");
		toggler.classList.remove("toggler");
		toggler2.classList.remove("toggler-2");
	}
}

document.addEventListener("DOMContentLoaded", darkMode);

toggleBtn.addEventListener("click", darkMode);
