document.addEventListener("DOMContentLoaded", function () {


    


    const links = document.querySelectorAll('a[href^="#"]');


    links.forEach(link => {


        link.addEventListener("click", function (e) {


            const target = document.querySelector(
                this.getAttribute("href")
            );


            if (target) {


                e.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth"

                });


            }


        });


    });






    


    const currentPage =
        window.location.pathname.split("/").pop();



    const menuLinks =
        document.querySelectorAll("nav a");



    menuLinks.forEach(link => {



        const linkPage =
            link.getAttribute("href");



        if (linkPage === currentPage) {


            link.classList.add("active");


        }


    });







    


    const placeholders =
        document.querySelectorAll(".button");



    placeholders.forEach(button => {



        if (button.getAttribute("href") === "#") {



            button.addEventListener(
                "click",
                function(e){


                    e.preventDefault();


                    alert(
                        "Материал будет добавлен позже."
                    );


                }
            );


        }


    });







    


    const burger =
        document.querySelector(".burger");


    const mobileMenu =
        document.querySelector(".mobile-menu");



    if (burger && mobileMenu) {



        


        burger.addEventListener("click", function (e) {


            e.stopPropagation();


            mobileMenu.classList.toggle("active");


        });





        


        const mobileLinks =
            mobileMenu.querySelectorAll("a");



        mobileLinks.forEach(link => {



            link.addEventListener("click", function () {



                mobileMenu.classList.remove("active");



            });



        });







        



        document.addEventListener("click", function(e){



            const clickInsideMenu =
                mobileMenu.contains(e.target);



            const clickBurger =
                burger.contains(e.target);





            if (!clickInsideMenu && !clickBurger) {



                mobileMenu.classList.remove("active");



            }



        });



    }








    

    const searchButton =
        document.querySelector(".mobile-search-button");



    const searchMenu =
        document.querySelector(".promotion-menu, .supply-menu");





    if(searchButton && searchMenu){





        


        searchButton.addEventListener("click", function(e){



            e.stopPropagation();



            searchMenu.classList.toggle("mobile-open");



        });







        


        const searchLinks =
            searchMenu.querySelectorAll("a");



        searchLinks.forEach(link => {



            link.addEventListener("click", function(){



                searchMenu.classList.remove("mobile-open");



            });



        });








        



        document.addEventListener("click", function(e){



            const clickInsideMenu =
                searchMenu.contains(e.target);



            const clickButton =
                searchButton.contains(e.target);






            if (!clickInsideMenu && !clickButton) {



                searchMenu.classList.remove("mobile-open");



            }



        });




    }


    


const contentButton =
    document.querySelector(".mobile-content-button");


const contentMenu =
    document.querySelector(".supply-menu");



if(contentButton && contentMenu){



    contentButton.addEventListener("click", function(e){


        e.stopPropagation();


        contentMenu.classList.toggle("mobile-open");


    });





    const contentLinks =
        contentMenu.querySelectorAll("a");



    contentLinks.forEach(link => {


        link.addEventListener("click", function(){


            contentMenu.classList.remove("mobile-open");


        });


    });






    document.addEventListener("click", function(e){


        const clickInsideMenu =
            contentMenu.contains(e.target);



        const clickButton =
            contentButton.contains(e.target);




        if(!clickInsideMenu && !clickButton){


            contentMenu.classList.remove("mobile-open");


        }


    });



}

function togglePromotionMenu(){

    const menu = document.querySelector(".promotion-menu");

    if(menu){
        menu.classList.toggle("mobile-open");
    }

}
});