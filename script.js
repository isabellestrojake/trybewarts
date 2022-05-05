const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

document.querySelector('#login').addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const desc = document.querySelector('#textarea');

function quantidadeCaracteres() {
  const quant = document.querySelector('#textarea').value;

  document.getElementById('counter').innerText = 500 - quant.length;
}
desc.addEventListener('input', quantidadeCaracteres);
// A função do counter foi criada com base em: https://medium.com/walternascimentobarroso-pt/contador-de-caracteres-com-html-e-js-648ee612d7be//
