var tween = KUTE.fromTo('#first', { path: '#first' }, { path: '#second' }, { repeat: 999, duration: 3000, yoyo: true }).start();

window.addEventListener("load", () => {

    let menuIcon = document.querySelector(".icon-menu");
    let navList = document.querySelector(".nav-list");
    let closeIcon = document.querySelector(".icon-close");


    menuIcon.addEventListener("click", displayMenu);
    closeIcon.addEventListener("click", closeMenu);

    function displayMenu() {
        navList.style.display = "flex";
    }

    function closeMenu() {
        navList.style.display = "none";
    }




    let goTop = document.querySelector(".go-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goTop.style.display = "block";
        } else {
            goTop.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }



    //close menu when link is clicked
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        })
    });



});