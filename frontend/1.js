//moves to top
document.getElementById("backToTop").addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})

//to hide poppup
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const popupMenu = document.getElementById("popup-menu");

    // Toggle popup visibility
    menuBtn.addEventListener("click", function (event) {
        popupMenu.classList.toggle("show"); // Toggle the show class
        event.stopPropagation(); // Prevent immediate closing when clicking the button
    });

    // Close popup when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuBtn.contains(event.target) && !popupMenu.contains(event.target)) {
            popupMenu.classList.remove("show");
        }
    });
});
