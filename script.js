const toggleBtn = document.querySelector(".toggle-btn");
const body = document.body;

function toggleTheme() {
	body.classList.toggle("dark");
	if (body.classList.contains("dark")) {
		toggleBtn.innerHTML =
			'<img src="./assets/images/icon-sun.svg" alt="Sun Icon">';
	} else {
		toggleBtn.innerHTML =
			'<img src="./assets/images/icon-moon.svg" alt="Moon Icon">';
	}
}

document.addEventListener("DOMContentLoaded", toggleTheme);

toggleBtn.addEventListener("click", toggleTheme);
