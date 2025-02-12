// Anti-debugging measures
(function () {
	setInterval(() => {
		const start = performance.now();
		debugger;
		const end = performance.now();
		if (end - start > 100) {
			window.location.reload();
		}
	}, 1000);
})();

// Prevent right-click and keyboard shortcuts
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
	if (
		(e.ctrlKey &&
			e.shiftKey &&
			(e.key === "I" || e.key === "J")) ||
		(e.ctrlKey && e.key === "u")
	) {
		e.preventDefault();
		window.location.reload();
	}
});

// Dynamic content generation with encryption
window.onload = function () {
	// Clear any existing content immediately
	document.body.innerHTML = "";

	const decodeStr = (str) => atob(str);
	const container = document.createElement("div");

	// Encode class names
	container.className = decodeStr("Y29udGFpbmVy"); // container

	const h1 = document.createElement("h1");
	h1.className = decodeStr("aGVhZA=="); // head
	h1.textContent = decodeStr("RmluZCBtZQ=="); // Find me

	const h2 = document.createElement("h2");
	h2.textContent = decodeStr("VGhpcyBpcyBXZWIgSHVudA=="); // This is Web Hunt

	// Random ID assignment
	const randomId = () => Math.random().toString(36).substr(2, 9);
	h1.id = randomId();
	h2.id = randomId();

	container.appendChild(h1);
	container.appendChild(h2);
	document.body.appendChild(container);

	// Add event listeners with delay
	setTimeout(addEventListeners, 100);

	// Mutation observer to prevent HTML modifications
	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (!mutation.target.isConnected) {
				window.location.reload();
			}
		});
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
		attributes: true,
	});
};

function addEventListeners() {
	let hoverCount = 0;
	let clickCount = 0;

	document.querySelector(
		'[class="' + atob("aGVhZA==") + '"]'
	).addEventListener("mouseover", () => {
		hoverCount++;
		if (hoverCount === 3) {
			alert(
				decodeStr(
					"Q2xpY2sgb24gdGhlIHRleHQgNSB0aW1lcw=="
				)
			);
		}
	});

	document.querySelector("h2").addEventListener("click", () => {
		clickCount++;
		if (clickCount <= 5) {
			alert(`Click ${5 - clickCount} more times!`);
			if (clickCount === 5) {
				alert(
					decodeStr(
						"Q2hlY2sgeW91ciBjb25zb2xlIQ=="
					)
				);
				console.clear();
				console.log(`
╦ ╦╔═╗╔╗   ╦ ╦╦ ╦╔╗╔╔╦╗  ╦╔═╗  ╔═╗╔╗╔
║║║║╣ ╠╩╗  ╠═╣║ ║║║║ ║   ║╚═╗  ║ ║║║║
╚╩╝╚═╝╚═╝  ╩ ╩╚═╝╝╚╝ ╩   ╩╚═╝  ╚═╝╝╚╝
`);
			}
		}
	});
}

// Helper function for decoding
function decodeStr(str) {
	return atob(str);
}
