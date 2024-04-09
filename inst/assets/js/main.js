
function scrollUp() {

    const scrollUp = document.getElementById("scroll-up");

    // when the scroll is higher then 560 viewpoint height, add the show-scroll
    // class to the a tag with the scroll.
    if (this.scrollY >= 560) {
        scrollUp.classList.add("show-scroll"); 
    } else {
        scrollUp.classList.remove("show-scroll");
    }

}

window.addEventListener("scroll", scrollUp);

// --------------------------- Header -------------------------------------
// const editLink = document.querySelectorAll(".edit-item");

// faIcons = ["fa-home", "fa-user", "fa-file-lines", "fa-briefcase", "fa-image", "fa-paper-plane"];

//function checkScreenWidth() {
//     const screenWidith = window.innerWidth;

//     if (screenWidith >= 768) {
//         editLink.forEach((link, index) => {
//             const icon = link.querySelector(`.fa-solid.${faIcons[index]}`);
//             if (icon) {
//                 link.removeChild(icon);
//             }
//         });
//     } else {
//         editLink.forEach((link, index) => {
//             const icon = document.createElement("i");

//             if (icon) {
//                 // 
//                 icon.className = `fa-solid ${faIcons[index]}`;
//                 // link.appendChild(icon);
//                 // link.insertBefore(icon, link.firstElementChild);
//                 link.insertBefore(icon, link.firstChild);
//                 // link.removeChild(link.firstChild);
//             }
//         });
//     } 
    
// }
// checkScreenWidth();
// window.addEventListener("resize", checkScreenWidth);

// ------------------------- Dark Theme ----------------------------
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme");
    // document.documentElement.classList.toggle("dark-theme");
});
