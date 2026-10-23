
const currentTime = new Date();
const hour = currentTime.getHours();

let greeting;

if (hour < 12) {
    greeting = "Good Morning! ";
} else if (hour < 18) {
    greeting = "Good Afternoon! ";
} else {
    greeting = "Good Evening! ";
}

document.getElementById("greeting").textContent = greeting;


const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-bs-theme");

    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-bs-theme", "light");
        darkModeToggle.textContent = "Dark Mode";
    } else {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        darkModeToggle.textContent = "Light Mode";
    }
});
