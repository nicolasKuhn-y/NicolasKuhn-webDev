import { repoInformation, technologyStack } from "./dataToMap.js";
const cardContainer = document.querySelector(".card-container")
const skillSection = document.querySelector(".skills-container");


const hamburgerBtn= document.querySelector(".hamburger-btn");
const list = document.querySelector(".nav-list");

hamburgerBtn.addEventListener("click", () => {
    list.classList.toggle("show");
})

const generateCard = arrayOfObjects => {

    arrayOfObjects.map(data => {

        cardContainer.innerHTML += `
        
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

const generateRow = (arrayOfObjects) => {
    arrayOfObjects.map(skill => {
        skillSection.innerHTML +=
            `
            <div class = "skill-row"> 
                <div class = "skill-container">
                    <i class="${skill.icon}"></i>
                    <h4 class = "skill-title"> ${skill.technology}</h4>
                </div>
            </div>
            `
    });
}

generateRow(technologyStack);
generateCard(repoInformation);


const dowloadCv = document.querySelector(".cv-button")
dowloadCv.addEventListener("click", () => window.open("src/downloadable content/CV Nicolas Kuhn.pdf"))


window.sr = ScrollReveal();
sr.reveal(".aboutMe-container", { duration: 1500 });
sr.reveal('.skill-row', { delay: 100, duration: 2000, distance: '2em', origin: "bottom" });
sr.reveal(".projects-container", { origin: "left", duration: 3500 });
sr.reveal(".contact-container", { origin: "rigth", duration: 3500 });
