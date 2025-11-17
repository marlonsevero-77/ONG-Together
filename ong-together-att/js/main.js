// main.js — compatível com SPA (hash router)
document.addEventListener("DOMContentLoaded", () => {

  // CAPTURA QUALQUER SUBMIT — mesmo após navegação via hash
  document.addEventListener("submit", function (e) {
    const form = e.target;
    e.preventDefault();

    // só executa para o formulário de cadastro
    if (!form.matches("#form-cadastro")) return;



    // Validação
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(":invalid");
      firstInvalid.focus();
      firstInvalid.reportValidity();
      return;
    }

    // Modal
    const modal = document.querySelector(".modal-backdrop");
    if (modal) {
      modal.querySelector("h3").textContent = "Envio com sucesso!";
      modal.querySelector("p").textContent = "Seu formulário foi enviado com sucesso.";
      modal.setAttribute("aria-hidden", "false");
    }

    form.reset();
  });

  // botão fechar modal
  document.addEventListener("click", function (e) {
    if (e.target.matches("[data-modal-close]")) {
      const modal = document.querySelector(".modal-backdrop");
      if (modal) modal.setAttribute("aria-hidden", "true");
    }
  });

});
