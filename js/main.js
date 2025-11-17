
// main.js - menu, mobile, modal, toast, masks (leve)
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle (hamburger)
  document.querySelectorAll('.hamburger').forEach(h => h.addEventListener('click', ()=> {
    document.querySelectorAll('.mobile-panel').forEach(p => p.classList.toggle('open'));
  }));

  // Dropdown submenu accessible (show/hide via CSS :hover and keyboard focus)

  // Modal open/close
  const modalOpenBtns = document.querySelectorAll('[data-modal-open]');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalCloseBtns = document.querySelectorAll('[data-modal-close]');
  modalOpenBtns.forEach(b => b.addEventListener('click', () => modalBackdrop && modalBackdrop.classList.add('open')));
  modalCloseBtns.forEach(b => b.addEventListener('click', () => modalBackdrop && modalBackdrop.classList.remove('open')));
  if(modalBackdrop) modalBackdrop.addEventListener('click', (e) => { if(e.target === modalBackdrop) modalBackdrop.classList.remove('open'); });

  // Toast helper
  function showToast(msg, timeout = 3000){
    const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t); setTimeout(()=> t.classList.add('show'), 50);
    setTimeout(()=> { t.classList.remove('show'); setTimeout(()=> t.remove(), 300); }, timeout);
  }

  // Simple masks for cpf/phone/cep
  function maskInput(el, fn){
    el.addEventListener('input', e => { e.target.value = fn(e.target.value); });
  }
  const cpf = document.getElementById('cpf');
  const tel = document.getElementById('telefone');
  const cep = document.getElementById('cep');
  if(cpf) maskInput(cpf, v => { v = v.replace(/\D/g,'').slice(0,11); v = v.replace(/(\d{3})(\d)/,'$1.$2'); v = v.replace(/(\d{3})(\d)/,'$1.$2'); v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2'); return v; });
  if(tel) maskInput(tel, v => { v = v.replace(/\D/g,'').slice(0,11); v = v.replace(/(\d{2})(\d)/,'($1) $2'); v = v.replace(/(\d{5})(\d)/,'$1-$2'); return v; });
  if(cep) maskInput(cep, v => { v = v.replace(/\D/g,'').slice(0,8); v = v.replace(/(\d{5})(\d)/,'$1-$2'); return v; });

  // Form submit demo with validation + feedback
  const form = document.getElementById('form-cadastro');
  if(form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if(!form.checkValidity()){
        form.reportValidity();
        return;
      }
      showToast('Cadastro recebido — obrigado!');
      const mb = document.querySelector('.modal-backdrop');
      if(mb) mb.classList.add('open');
      form.reset();
    });
  }
});
