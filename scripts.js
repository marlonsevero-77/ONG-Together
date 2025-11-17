
/* scripts.js - máscaras simples e validação */
document.addEventListener('DOMContentLoaded', function(){
  const cpf = document.getElementById('cpf');
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');
  const form = document.getElementById('form-cadastro');

  function setCursorToEnd(el){
    if (typeof el.selectionStart == 'number') {
      el.selectionStart = el.selectionEnd = el.value.length;
    }
  }

  function maskCPF(v){
    v = v.replace(/\D/g,'').slice(0,11);
    v = v.replace(/(\d{3})(\d)/,'$1.$2');
    v = v.replace(/(\d{3})(\d)/,'$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
    return v;
  }

  function maskPhone(v){
    v = v.replace(/\D/g,'').slice(0,11);
    v = v.replace(/(\d{2})(\d)/,'($1) $2');
    v = v.replace(/(\d{5})(\d)/,'$1-$2');
    return v;
  }

  function maskCEP(v){
    v = v.replace(/\D/g,'').slice(0,8);
    v = v.replace(/(\d{5})(\d)/,'$1-$2');
    return v;
  }

  if(cpf){
    cpf.addEventListener('input', e => {
      e.target.value = maskCPF(e.target.value);
      setCursorToEnd(e.target);
    });
  }

  if(telefone){
    telefone.addEventListener('input', e => {
      e.target.value = maskPhone(e.target.value);
      setCursorToEnd(e.target);
    });
  }

  if(cep){
    cep.addEventListener('input', e => {
      e.target.value = maskCEP(e.target.value);
      setCursorToEnd(e.target);
    });
  }

  // Validação customizada leve
  if(form){
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){
        e.preventDefault();
        const firstInvalid = form.querySelector(':invalid');
        if(firstInvalid){
          firstInvalid.focus();
          firstInvalid.reportValidity();
        }
        return false;
      }
      e.preventDefault();
      alert('Cadastro enviado com sucesso (simulação). Obrigado!');
      form.reset();
    });
  }
});
