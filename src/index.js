import aboutLoad from "./about.js";
import menuLoad from "./menu.js";
import pageLoad from "./page-load.js";

pageLoad();

function tabs() 
{
    const home = document.querySelector(".home");
    home.addEventListener("click", () => 
    {
        pageLoad();
    })

    const menu = document.querySelector(".menu");
    menu.addEventListener("click", () => 
    {
        menuLoad();
    })

    const about = document.querySelector(".about");
    about.addEventListener("click", () => 
    {
        aboutLoad();
    })
}

tabs();
