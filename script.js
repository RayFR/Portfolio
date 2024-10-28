const getUserSelectedText = () => {
    return window.getSelection().toString();
}

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#2ab9b9",
    "#5ac3c3",
    "#7bcdcd",
    "#98d7d6",
    "#b3e1e0",
    "#cdebeb",
    "#e6f5f5",
    "#ffffff"
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
    if (window.innerWidth >= 768) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    }
});

function animateCircles() {
    // Only run animation if screen width is 768px or greater
    if (window.innerWidth >= 768) {
        let x = coords.x;
        let y = coords.y;

        circles.forEach(function (circle, index) {
            circle.style.left = x - 12 + "px";
            circle.style.top = y - 12 + "px";

            circle.style.scale = (circles.length - index) / circles.length;

            circle.x = x;
            circle.y = y;

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });
    }

    requestAnimationFrame(animateCircles);
}

// Add resize event listener to check screen width on window resize
window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
        circles.forEach(circle => {
            circle.style.left = ""; // Remove positioning
            circle.style.top = ""; // Remove positioning
            circle.style.scale = ""; // Remove scale
        });
    }
});

animateCircles();
