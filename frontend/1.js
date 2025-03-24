//moves to top
document.getElementById("backToTop").addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})

//to hide poppup
document.addEventListener("DOMContentLoaded",function(){
    let poppup=document.getElementById("popup-menu")
    let menu=document.getElementById("menu-btn")

    menu.addEventListener("click",function(e){
        poppup.classList.toggle("show");
        e.stopPropagation();
    })
    document.addEventListener("click",function(e){
        if(!menu.contains(e.target) && !poppup.contains(e.target)){
            poppup.classList.remove("show");
        }
    })
})

document.addEventListener("DOMContentLoaded", function () {
    let workBtn = document.getElementById("work-btn");
    let workOptions = document.getElementById("work-options");

    if (workBtn && workOptions) {
        workBtn.addEventListener("click", function (event) {
            workOptions.classList.toggle("show"); // Toggle show class
            event.stopPropagation(); // Prevent closing when clicking the button
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function (event) {
            if (!workBtn.contains(event.target) && !workOptions.contains(event.target)) {
                workOptions.classList.remove("show");
            }
        });
    }
});
