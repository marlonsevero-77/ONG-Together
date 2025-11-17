// Scripts globais da interface (menu mobile)

// MENU MOBILE
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("hamburger")) {
        document.querySelector(".mobile-panel").classList.toggle("open");
    }
});

// FECHAR MENU AO CLICAR EM UM LINK
document.addEventListener("click", (e) => {
    if (e.target.closest(".mobile-panel a")) {
        document.querySelector(".mobile-panel").classList.remove("open");
    }
});

// SCRIPTS DE CADA PÁGINA
function initPageScripts() {

};


