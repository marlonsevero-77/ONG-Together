function initPageScripts() {
  /* ----------------------------------------------------------
     1. Máscaras (aplicadas apenas se os inputs existirem)
  ----------------------------------------------------------- */
  const cpf = document.getElementById('cpf');
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  function setCursorToEnd(el) {
    if (typeof el.selectionStart === 'number') {
      el.selectionStart = el.selectionEnd = el.value.length;
    }
  }

  function maskCPF(v) {
    v = v.replace(/\D/g, '').slice(0, 11);
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return v;
  }

  function maskPhone(v) {
    v = v.replace(/\D/g, '').slice(0, 11);
    v = v.replace(/(\d{2})(\d)/, '($1) $2');
    v = v.replace(/(\d{5})(\d)/, '$1-$2');
    return v;
  }

  function maskCEP(v) {
    v = v.replace(/\D/g, '').slice(0, 8);
    v = v.replace(/(\d{5})(\d)/, '$1-$2');
    return v;
  }

  if (cpf) {
    cpf.addEventListener('input', e => {
      e.target.value = maskCPF(e.target.value);
      setCursorToEnd(e.target);
    });
  }

  if (telefone) {
    telefone.addEventListener('input', e => {
      e.target.value = maskPhone(e.target.value);
      setCursorToEnd(e.target);
    });
  }

  if (cep) {
    cep.addEventListener('input', e => {
      e.target.value = maskCEP(e.target.value);
      setCursorToEnd(e.target);
    });
  }

  /* ----------------------------------------------------------
     2. Validação do formulário + exibição do modal
  ----------------------------------------------------------- */
  const form = document.getElementById("form-cadastro");
  const modal = document.querySelector(".modal-backdrop");

  if (!form || !modal) return;

  const closeBtn = modal.querySelector("[data-modal-close]");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validação nativa do navegador
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(":invalid");
      firstInvalid?.focus();
      firstInvalid?.reportValidity();

      // Estilização opcional
      form.querySelectorAll("[required]").forEach(campo => {
        campo.classList.toggle("campo-erro", !campo.checkValidity());
      });

      return;
    }

    // Exibe modal de sucesso
    modal.classList.add("ativo");
    modal.setAttribute("aria-hidden", "false");

    // Limpa campos e estilos
    form.reset();
    form.querySelectorAll(".campo-erro").forEach(campo => campo.classList.remove("campo-erro"));
  });

  // Fechar modal
  closeBtn?.addEventListener("click", () => {
    modal.classList.remove("ativo");
    modal.setAttribute("aria-hidden", "true");
  });
}