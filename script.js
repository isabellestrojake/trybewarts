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

const botaoEnviar = document.getElementById('submit-btn');
botaoEnviar.disabled = true;

const checkbox = document.getElementById('agreement');

function desabilitaBotao() {
  if (checkbox.checked === true) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
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
const emailCadastrado = document.querySelector('#input-email')
const casaEscolhida = document.querySelector('#house')
const familiaEscolhida = document.querySelectorAll('input[type=radio]')
const materiaEscolhida = document.querySelectorAll('.subject')
const avaliacao = document.querySelectorAll('.avaliacao')
const observacoes = document.querySelector("#textarea")
const form = document.querySelector('#evaluation-form')

function substituiFormulario() {
  form.innerText = '';
  const novaDiv = document.createElement('div')
  form.appendChild(novaDiv)

  const nomeCompleto = document.createElement('p')
  nomeCompleto.innerHTML = 'Nome: ' + primeiroNome.value + ' ' + sobrenome.value + '<br>' + 'Email: ' + emailCadastrado.value + '<br>' +
    'Casa: ' + casaEscolhida.value + '<br>' + 'Família: ' + valorDoInputRadio() + '<br>' + 'Matérias: ' + valorDoInputCheckbox() + '<br>' +
    'Avaliação: ' + valorRadioAvaliacao() + '<br>' + 'Observações: ' + observacoes.value

  novaDiv.appendChild(nomeCompleto)
}

function valorDoInputRadio() {
  const inputRadioChecked = [];
  for (let i = 0; i < familiaEscolhida.length; i += 1) {
    if (familiaEscolhida[i].checked) {
      inputRadioChecked.push(familiaEscolhida[i].value)
    }
  }
  return inputRadioChecked
}

function valorDoInputCheckbox() {
  const inputCheckbox = [];
  for (let i = 0; i < materiaEscolhida.length; i += 1) {
    if (materiaEscolhida[i].checked) {
      inputCheckbox.push(materiaEscolhida[i].value)
    }
  }
  return inputCheckbox.join(', ')
}

function valorRadioAvaliacao() {
  const inputCheckedAvaliacao = [];
  for (let i = 0; i < avaliacao.length; i += 1) {
    if (avaliacao[i].checked) {
      inputCheckedAvaliacao.push(avaliacao[i].value)
    }
  }
  return inputCheckedAvaliacao
}

botaoEnviar.addEventListener('click', substituiFormulario)