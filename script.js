const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

document.querySelector('#login').addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

//Desabilita/habilita botão Enviar

const input = document.getElementById('submit-btn')
input.disabled = true

const checkbox = document.getElementById('agreement')
checkbox.addEventListener("input", desabilitaBotao)

function desabilitaBotao() {
  if (checkbox.checked == true) {
    input.disabled = false;
  } else {
    input.disabled = true;
  }
};

