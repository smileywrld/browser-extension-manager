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

function darkMode() {
	body.classList.toggle("dark");
	if (body.classList.contains("dark")) {
		toggleBtn.innerHTML =
			'<img src="assets/images/icon-moon.svg" alt="Moon Icon">';
		heading.classList.add("text-white");
		card.classList.add("card");
	} else {
		toggleBtn.innerHTML =
			'<img src="assets/images/icon-sun.svg" alt="Sun Icon">';
		heading.classList.remove("text-white");
		card.classList.remove("card");
	}
}

toggleBtn.addEventListener("click", darkMode);
