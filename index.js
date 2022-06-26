let isDark = localStorage.getItem("isDarkEnabled");

if (isDark == "true") {
    document.body.classList.toggle("dark");
}

let darkToggle = document.querySelector("#darkToggle");
if (darkToggle) {
    darkToggle.checked = isDark == "true";
    darkToggle.addEventListener("change", () => {
        
        toggleDarkMode(darkToggle.checked);
    });
}

function toggleDarkMode(isDark) {
   
    document.body.classList.toggle("dark");
    localStorage.setItem("isDarkEnabled", isDark);
    
}
