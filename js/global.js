"use strict";


// Import

import { ripple } from "./utils/ripple.js";
import { addEventOnElements } from "./utils/event.js";


// Header on-scroll state

const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

// Ripple Effect

const $rippleElems = document.querySelectorAll("[data-ripple]");

$rippleElems.forEach($rippleElem => ripple($rippleElem));

/* nav toggle for mobile sereen */
const /** {NodeList} */ $navTogglers = document.querySelectorAll("[data-nav-toggler]");
const /** {NodeElement} */ $navbar = document.querySelector("[data-navigation]");
const /** {NodeElement} */ $scrim = document.querySelector("[data-scrim]");

addEventOnElements($navTogglers, "click", function () {
    $navbar.classList.toggle("show");
    $scrim.classList.toggle("active");
});


/* Filter functionality */

window.filterobj = {};


/* Initial favorite object in local storage */

if (!window.localStorage.getItem("favorite")) {
    const /** {Object} */ favoriteObj = {
        photos: {},
        videos: {}
    }

    window.localStorage.setItem("favorite", JSON.stringify(favoriteObj));
}

/* page transtion */
window.addEventListener("loadstart", function () {
    document.body.style.opacity = "0";
});

window.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "1";
});
