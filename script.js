const email = document.querySelector('#email').value;
const senha = document.querySelector('#senha').value;

document.querySelector('#login').addEventListener('click', () => {
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
