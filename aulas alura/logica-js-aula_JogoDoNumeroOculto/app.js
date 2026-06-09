alert('Bem vindo ao jogo do número secreto ^_^');
let numeroSecreto = 8;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    alert(`parabéns! Você descobriu o número secreto ^^ (${numeroSecreto})`);
} else {
    alert('Que pena! Você errou:<');
}
