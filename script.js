fetch("./data.json")
	.then((response) => response.json())
	.then((data) => {
		const container = document.querySelector(".card-container");

		data.forEach((item) => {
			const card = document.createElement("figure");
			card.classList.add(
				"bg-white",
				"rounded-3xl",
				"p-5",
				"shadow-lg",
				"mb-5",
				"w-fit",
				"h-[100%]",
				"flex",
				"justify-center",
				"flex-col",
				"card"
			);

			card.innerHTML = `
		<div class="flex gap-5 justify-around me-5">
			<div>
			  <img src="${item.logo}" alt="${item.title}" class="w-25">
			</div>
			<div class="mb-5 mx-4">
			  <h3 class="text-2xl font-bold">${item.title}</h3>
			  <p>${item.desc}</p>
			</div>
		  </div>
		  <div class="flex justify-between">
			<a href="#" class="bg-[#EBF4FD] px-4 rounded-full hover:bg-[#C6241A] hover:text-white remove">Remove</a>
			<label class="relative inline-flex items-center cursor-pointer">
			  <input type="checkbox" class="sr-only peer">
			  <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#C6241A] peer-focus:ring-2 ring-blue-500 transition-all duration-300"></div>
			  <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-full"></div>
			</label>
		  </div>
		`;

			container.appendChild(card);
		});
	});

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
