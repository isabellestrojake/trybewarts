// Verifica as informações de login

const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

document.querySelector('#login').addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Desabilita/habilita botão Enviar

const input = document.getElementById('submit-btn');
input.disabled = true;

const checkbox = document.getElementById('agreement');

function desabilitaBotao() {
  if (checkbox.checked === true) {
    input.disabled = false;
  } else {
    input.disabled = true;
  }
}
checkbox.addEventListener('input', desabilitaBotao);

// Contador

const desc = document.querySelector('#textarea');

function quantidadeCaracteres() {
  const quant = document.querySelector('#textarea').value;

  document.getElementById('counter').innerText = 500 - quant.length;
}
desc.addEventListener('input', quantidadeCaracteres);

// A função do counter foi criada com base em: https://medium.com/walternascimentobarroso-pt/contador-de-caracteres-com-html-e-js-648ee612d7be

//Mostra as informações ao submeter o formulário

const primeiroNome = document.querySelector('#input-name')
const sobrenome = document.querySelector('#input-lastname')
const emailCadastrado = document.querySelector('#email')
const casaEscolhida = document.querySelector('#house')
const familiaEscolhida = document.querySelectorAll('#label-family')
const materiaEscolhida = document.querySelectorAll('#label-family')


const main = document.querySelector('#main')
input.addEventListener('click', mostraInformacoes)

function mostraInformacoes() {
  const nomeCompleto = document.createElement('p')
  nomeCompleto.innerText = 'Nome: ' + primeiroNome.value + ' ' + sobrenome.value
  primeiroNome.insertBefore(nomeCompleto, sobrenome)
}
