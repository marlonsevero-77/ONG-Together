const routes = {
    "/": Home,
    "/projetos": Projetos,
    "/cadastro": Cadastro,
};

function navigate() {
    let path = location.hash.replace("#", "").trim();

    // rota vazia → /
    if (path === "") path = "/";

    // mantém apenas a primeira parte da rota
    const cleanPath = "/" + path.split("/")[1];

    const page = routes[cleanPath] || Home;

    document.getElementById("app").innerHTML = page();

    // reativa JS da página atual
    if (typeof initPageScripts === "function") initPageScripts();
}

window.addEventListener("hashchange", navigate);
window.addEventListener("load", navigate);
