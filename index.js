let isDark = localStorage.getItem("isDarkEnabled");
// console.log("isDark:" + isDark);
if (isDark == "true") {
    document.body.classList.toggle("dark");
}

let darkToggle = document.querySelector("#darkToggle");
if (darkToggle) {
    darkToggle.checked = isDark == "true";
    darkToggle.addEventListener("change", () => {
        // console.log(
        //     "changed:" + darkToggle + " checked: " + darkToggle.checked
        // );
        toggleDarkMode(darkToggle.checked);
    });
}

function toggleDarkMode(isDark) {
    // console.log("toggleDarkMode:" + isDark);
    document.body.classList.toggle("dark");
    localStorage.setItem("isDarkEnabled", isDark);
    // console.log("localStorage:" + localStorage);
    // let moonIcon = document.querySelector(".fa-moon");
    // if (moonIcon) {
    //     moonIcon.classList.toggle("dark");
    // }
    // let sunIcon = document.querySelector(".fa-sun");
    // if (sunIcon) {
    //     sunIcon.classList.toggle("dark");
    // }
}
