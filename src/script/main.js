'use strict';
import { repoInformation, technologyStack } from "./dataToMap.js";

const cardContainer = document.querySelector(".card-container");
const skillSection = document.querySelector(".skills-container");

const generateRow = (arrayOfObjects) => {
    arrayOfObjects.map(skill => {
        skillSection.innerHTML +=
            `
            <div class = "skill-row"> 
                <div class = "row-information">
                    <i class="${skill.icon}"></i>
                    <h4 class = "skill-title"> ${skill.technology}</h4>
                </div>
            </div>
            `
    });
}

const generateCard = arrayOfObjects => {
    arrayOfObjects.map(data => {
        cardContainer.innerHTML +=
            `
        <article class="card">

            <img src="${data.img} " alt="imagen de proyecto" loading="lazy">
            <h4 class="title">${data.title}</h4>

            <div class="hover-content">
                
                <button class="projects-links">
                    <a href="${data.linkToRepo}" >Repo</a>
                </button>

                <button class="projects-links">
                    <a href="${data.linkToPage}">Pagina</a>
                </button>
            </div>

        </article>
        `
    });
}

generateRow(technologyStack);
generateCard(repoInformation);


document.querySelector(".cv-button").addEventListener("click", () => {
    window.open("src/downloadable content/CV Nicolas Kuhn.pdf")
});

// Mostrar y quitar el menu emergente en mobile.
const hamburgerBtn = document.querySelector(".hamburger-btn");
const navList = document.querySelector(".nav-list");
const links = navList.childNodes;

hamburgerBtn.addEventListener("click", () => navList.classList.toggle("show"));

links.forEach(li => li.addEventListener("click", () => navList.classList.remove("show")));

window.sr = ScrollReveal();
sr.reveal(".aboutMe-container", { duration: 1500 });
sr.reveal('.skill-row', { delay: 100, duration: 2000, distance: '2em', origin: "bottom" });
sr.reveal(".projects-container", { origin: "left", duration: 3500 });
sr.reveal(".contact-container", { origin: "rigth", duration: 3500 });