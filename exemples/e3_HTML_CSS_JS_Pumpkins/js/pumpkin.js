const elementSize = 100;

function createPumpkin() {
	const pumpkinDiv = document.getElementById("pumpkin");
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", elementSize * 6);
	svg.setAttribute("height", elementSize * 6);
	pumpkinDiv.appendChild(svg);

	// Create Geometric Shapes
	function createShape(type, id) {
		const element = document.createElementNS("http://www.w3.org/2000/svg", type);
		element.setAttribute("id", id);
		const centerX = svg.clientWidth / 2;
		const centerY = svg.clientHeight / 2;

		if (type === "rect") {
			element.setAttribute("width", elementSize);
			element.setAttribute("height", elementSize);
			element.setAttribute("x", centerX);
			element.setAttribute("y", centerY);
		} else if (type === "circle") {
			element.setAttribute("cx", centerX);
			element.setAttribute("cy", centerY);
			element.setAttribute("r", elementSize);
		} else if (type === "polygon") {
			const points = [];
			for (let i = 0; i < 3; i++) {
				const angle = (i * 120 * Math.PI) / 180;
				points.push(centerX + elementSize * Math.cos(angle));
				points.push(centerY + elementSize * Math.sin(angle));
			}
			element.setAttribute("points", points.join(" "));
		}
		element.setAttribute("fill", "#F27405");
		svg.appendChild(element);
	}

	createShape("circle", "glow");
	createShape("circle", "shadow");
	createShape("polygon", "hat");
	for (let i = 0; i < 3; i++) {
		createShape("circle", `pumpkin${i + 1}`);
	}
	for (let i = 0; i < 4; i++) {
		createShape("polygon", `eye${i + 1}`);
	}
	for (let i = 0; i < 10; i++) {
		createShape("rect", `mouth${i + 1}`);
	}
}

createPumpkin();

// Animate geometric shapes into the form of a pumpkin
var tl = gsap.timeline({
	defaults: { duration: 0.2, transformOrigin: "50% 50%", ease: "power4.out" }
});
tl.to("#glow", { opacity: 0.3, scale: 2 });
tl.to("#pumpkin1", { opacity: 0.3, scaleX: 1.1 });
tl.to("#pumpkin2", { opacity: 0.3, scaleX: 0.8 });
tl.to("#pumpkin3", { opacity: 0.3, scaleX: 0.5 });
tl.to("#shadow", {
	opacity: 0.8,
	scaleX: 0.8,
	scaleY: 0.1,
	y: elementSize,
	fill: "#1c1305"
});
tl.to("#eye1", {
	opacity: 0.5,
	rotation: 25,
	y: elementSize - 125,
	x: -60,
	scaleX: 0.3,
	scaleY: 0.2,
	fill: "#1c1305"
});

tl.to("#eye2", {
	opacity: 1,
	rotation: 25,
	y: elementSize - 125,
	x: -60,
	fill: "#1c1305",
	scaleX: 0.25,
	scaleY: 0.15,
	skewX: 3
});

tl.to(
	"#eye3",
	{
		rotation: 155,
		opacity: 1,
		y: elementSize - 125,
		x: 10,
		scaleX: 0.3,
		scaleY: 0.2,
		fill: "#1c1305",
		opacity: 0.5
	},
	"<"
);
tl.to(
	"#eye4",
	{
		rotation: 155,
		opacity: 1,
		y: elementSize - 125,
		x: 10,
		scaleX: 0.25,
		scaleY: 0.15,
		skewX: 3,
		fill: "#1c1305"
	},
	"<"
);
tl.to(
	"#mouth1",
	{ opacity: 0.5, rotation: 45, y: -10, x: -90, scale: 0.25, fill: "#1c1305" },
	"<"
);
tl.to(
	"#mouth2",
	{
		opacity: 1,
		rotation: 45,
		y: -10,
		x: -90,
		scale: 0.2,
		skewX: "random(-10, 10)",
		fill: "#1c1305"
	},
	"<"
);

tl.to(
	"#mouth3",
	{ opacity: 0.5, rotation: 45, y: -15, x: -70, scale: 0.25, fill: "#1c1305" },
	"<"
);
tl.to(
	"#mouth4",
	{
		opacity: 1,
		rotation: 45,
		y: -15,
		x: -70,
		scale: 0.2,
		skewX: "random(-10, 10)",
		fill: "#1c1305"
	},
	"<"
);

tl.to(
	"#mouth5",
	{ opacity: 0.5, rotation: 45, y: -15, x: -50, scale: 0.25, fill: "#1c1305" },
	"<"
);
tl.to(
	"#mouth6",
	{
		opacity: 1,
		rotation: 45,
		y: -15,
		x: -50,
		scale: 0.2,
		skewX: "random(-10, 10)",
		fill: "#1c1305"
	},
	"<"
);

tl.to(
	"#mouth7",
	{ opacity: 0.5, rotation: 45, y: -15, x: -30, scale: 0.25, fill: "#1c1305" },
	"<"
);
tl.to(
	"#mouth8",
	{
		opacity: 1,
		rotation: 45,
		y: -15,
		x: -30,
		scale: 0.2,
		skewX: "random(-10, 10)",
		fill: "#1c1305"
	},
	"<"
);

tl.to(
	"#mouth9",
	{ opacity: 0.5, rotation: 45, y: -10, x: -10, scale: 0.25, fill: "#1c1305" },
	"<"
);
tl.to(
	"#mouth10",
	{
		opacity: 1,
		rotation: 45,
		y: -10,
		x: -10,
		scale: 0.2,
		skewX: "random(-10, 10)",
		fill: "#1c1305"
	},
	"<"
);

tl.to("#hat", {
	opacity: 1,
	rotation: 90,
	y: -100,
	x: elementSize - 125,
	scale: 0.3,
	fill: "#1c1305"
});
