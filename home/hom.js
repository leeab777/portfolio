const text = " JOIN ME ON MY JOURNEY "; // Text to be displayed
const container = document.getElementById("circle-text");
const wrapper = document.getElementById("circle-text-wrapper");

// Create and append the logo dynamically
const logo = document.createElement("img");
logo.src = "logo2.svg"; // Update to your logo path
logo.alt = "Logo";
logo.id = "center-logo";
wrapper.appendChild(logo);

logo.style.position = "absolute";
logo.style.top = "50%";
logo.style.left = "50%";
logo.style.transform = "translate(-50%, -50%)";
logo.style.zIndex = "10";

// Default values
let radius = 130;
let logoSize = 200;

// Function to update sizes dynamically based on screen width
function updateSizes() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 700) {
        radius = 90; // Smaller radius for circle text
        logoSize = 120; // Smaller logo size
    } else {
        radius = 130; // Default radius
        logoSize = 200; // Default logo size
    }

    // Update logo size
    logo.style.width = `${logoSize}px`;
    logo.style.height = `${logoSize}px`;

    // Clear existing text and re-render circle text
    container.innerHTML = '';
    text.split('').forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter === "" ? "\u00A0" : letter;
        const angle = (index / text.length) * 360;
        span.style.position = "absolute";
        span.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(90deg)`;
        container.appendChild(span);
    });
}

// Listen to screen resize and update sizes dynamically
window.addEventListener("resize", updateSizes);

// Call the function initially to set the sizes correctly
updateSizes();
