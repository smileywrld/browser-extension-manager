const body = document.body;
const toggleBtn = document.querySelector(".toggle-btn");
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

		document.querySelectorAll(".card").forEach((card) => {
			card.classList.add("card");
		});

		document.querySelectorAll(".remove").forEach((btn) => {
			btn.classList.add("remove");
		});

		document.querySelectorAll(".toggler").forEach((toggler) => {
			toggler.classList.add("toggler");
		});

		document.querySelectorAll(".toggler-2").forEach((toggler2) => {
			toggler2.classList.add("toggler-2");
		});
	} else {
		toggleBtn.innerHTML =
			'<img src="assets/images/icon-sun.svg" alt="Sun Icon">';
		heading.classList.remove("text-white");

		document.querySelectorAll(".card").forEach((card) => {
			card.classList.remove("card");
		});

		document.querySelectorAll(".remove").forEach((btn) => {
			btn.classList.remove("remove");
		});

		document.querySelectorAll(".toggler").forEach((toggler) => {
			toggler.classList.remove("toggler");
		});

		document.querySelectorAll(".toggler-2").forEach((toggler2) => {
			toggler2.classList.remove("toggler-2");
		});
	}
}

document.addEventListener("DOMContentLoaded", darkMode);

toggleBtn.addEventListener("click", darkMode);

fetch("./data.json")
	.then((response) => response.json())
	.then((data) => {
		const container = document.getElementById("card-container");

		data.forEach((item) => {
			const card = document.createElement("figure");
			card.classList.add(
				"bg-white",
				"lg:w-[80%]",
				"rounded-3xl",
				"p-5",
				"shadow-lg",
				"mb-5",
				"w-screen",
				"lg:w-[100%]",
				"h-[100%]",
				"flex",
				"justify-center",
				"flex-col",
				"card"
			);

			card.innerHTML = `
		<div class="flex gap-5 justify-around me-5">
			<div>
			  <img src="${item.logo}" alt="${item.name}" class="w-25">
			</div>
			<div class="mb-5 mx-4">
			  <h3 class="text-2xl font-bold">${item.name}</h3>
			  <p>${item.description}</p>
			</div>
		  </div>
		  <div class="flex justify-between items-center mt-5">
			<a href="#" class="bg-[#EBF4FD] px-5 py-1 rounded-full hover:bg-[#C6241A] hover:text-white remove">Remove</a>
			<label class="relative inline-flex items-center cursor-pointer">
			 <input type="checkbox" class="sr-only peer" ${item.isActive ? "checked" : ""}>

			  <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#C6241A] peer-focus:ring-2 ring-blue-500 transition-all duration-300"></div>
			  <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-full"></div>
			</label>
		  </div>
		`;

			remove.addEventListener("click", (e) => {
				e.preventDefault();
				card.remove();
			});

			container.appendChild(card);
		});

		const card = document.querySelector(".card");
	})

	.catch((error) => {
		console.error("Failed to load JSON:", error);
	});
